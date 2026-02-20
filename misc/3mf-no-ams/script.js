let PRINT_SEQUENCE_FILE_NAME = "Metadata/filament_sequence.json";
let PLATE_FILE_NAME_PREFIX = "Metadata/plate_";
let PRINT_CONFIG_FILE_NAME = "Metadata/project_settings.config"; 
function GCODE_FILE_NAME(num = 0) { return PLATE_FILE_NAME_PREFIX + (num + 1) + ".gcode" };

window.loadedGcode = false;
window.loadedJson = false;
window.gCodeCount = 0;
window.json = {};
window.pauses = 0;

const PAUSE = "M400 U1";
const CONFIG_END = "; CONFIG_BLOCK_END";

function checkCanProcess() {
    let sel = document.getElementById("plateSelect");
    while (sel.lastChild) sel.removeChild(sel.lastChild);

    let fil = document.getElementById("filament");
    while (fil.lastChild) fil.removeChild(fil.lastChild);

    if (!window.loadedGcode || !window.loadedJson) return;

    let keys = Object.keys(window.json);
    for (let i = 0; i < keys.length; i++) {
        let opt = document.createElement("option");
        opt.value = i + 1;
        opt.text = "Plate " + (i + 1);

        sel.appendChild(opt);
    }

    $(sel).change();
}

function updatePrintOrder() {
    if (!window.loadedJson) return;

    let sel = document.getElementById("plateSelect");
    let json = window.json["plate_" + sel.value].sequence;
    let unique = [... new Set(json)].length;

    let strs = [];
    let str = [];
    for (let i = 0; i < unique; i++) {
        strs.push(document.getElementById("filament" + (i + 1)).value);
    }

    for (let i = 0; i < json.length; i++) {
        str.push(strs[json[i] - 1]);
    }

    document.getElementById("printOrder").value = str.join(", ");
    document.getElementById("changes").textContent = "Filament swaps: " + (str.length - 1);
    window.pauses = str.length - 1;
}

function processGcode(lines) {
    lines = lines.split("\n");
    let out = [];
    let read = true;
    let i = 0;
    let addPause = false;
    let foundStart = false;
    let skipThis = false;
    let foundConfig = false;
    let pauses = 0;

    for (const line of lines) {
        i++;
        skipThis = false;
        if (foundConfig) {
            if (line.includes("filament end gcode")) {
                addPause = true;
            }
            //if (foundStart) {
            //    if (line.includes("; FLUSH_START")) {
            //        read = false;
            //    }
            //    if (line.includes("; FLUSH_END")) {
            //        read = true;
            //        foundStart = false;
            //        skipThis = true;
            //    }
            //}
            if (read && !skipThis) {
                out.push(line);
                if (addPause /*&& pauses < window.pauses*/) {
                    pauses++;
                    addPause = false;
                    out.push(PAUSE);
                    foundStart = true;
                }
            }
        }
        if (line.includes(CONFIG_END)) foundConfig = true;
    }

    out = out.join("\n");
    return out;
}

$("#plateSelect").change(() => {
    if (!window.loadedJson) return;

    let fil = document.getElementById("filament");
    while (fil.lastChild) fil.removeChild(fil.lastChild);

    let sel = document.getElementById("plateSelect");
    let json = window.json["plate_" + sel.value].sequence;
    let unique = [... new Set(json)].length;
    
    for (let i = 0; i < unique; i++) {
        let row = document.createElement("div");
        row.classList.add("row", "mb-2");

        let col = document.createElement("div");
        col.classList.add("col", "col-sm-4");
        row.appendChild(col);

        let id = "filament" + (i + 1);

        let lab = document.createElement("label");
        lab.classList.add("col-form-label");
        lab.htmlFor = id;
        lab.textContent = "Filament " + (i + 1) + ":";
        col.appendChild(lab);

        let col2 = document.createElement("div");
        col2.classList.add("col", "col-sm-8");
        row.appendChild(col2);

        let inp = document.createElement("input");
        inp.type = "text";
        inp.classList.add("form-control", "bg-dark", "text-light");
        inp.value = (i + 1);
        inp.id = id;
        inp.name = id;
        inp.addEventListener("change", updatePrintOrder);
        col2.appendChild(inp);

        fil.appendChild(row);
    }

    updatePrintOrder();
});

function handlePrintSequenceJSON(data) {
    let json = JSON.parse(data);
    window.json = json;
    window.loadedJson = true;
    checkCanProcess();
}

$("#formFile").change((evt) => {
    function processZip(f) {
        JSZip.loadAsync(f).then((zip) => {
            window.loadedGcode = false;
            window.loadedJson = false;

            let hasPrintSequence = false;
            let hasGcode = false;
            let gCodeCount = 0;

            zip.forEach(function (_, zipEntry) {
                let name = zipEntry.name;
                if (name === PRINT_SEQUENCE_FILE_NAME) {
                    hasPrintSequence = true;
                    zip.files[PRINT_SEQUENCE_FILE_NAME].async("string").then(data => handlePrintSequenceJSON(data));
                }

                if (name.startsWith(PLATE_FILE_NAME_PREFIX)) {
                    if (name === GCODE_FILE_NAME(gCodeCount)) {
                        hasGcode = true;
                        gCodeCount++;
                    }
                }
            });

            if (!hasPrintSequence || !hasGcode) {
                let problems = [];
                if (!hasPrintSequence) problems.push("Print Sequence");
                if (!hasGcode) problems.push("GCode File");

                return alert("Provided file was missing the following component(s):\n\n" + "- " + problems.join("\n- "));
            }

            window.gCodeCount = gCodeCount;
            window.loadedGcode = true;
            checkCanProcess();
        }).catch(e => {
            alert("Something went wrong!\n\n" + e.message);
        });
    }

    let files = evt.target.files;
    for (let i = 0; i < files.length; i++) {
        processZip(files[i]);
    }
});

$("#go").click(() => {
    var form = document.getElementById("formFile");
    var f = form.files[0];

    let sel = document.getElementById("plateSelect").value;

    JSZip.loadAsync(f).then((zip) => {
        let fname = GCODE_FILE_NAME(sel - 1);
       
        zip.files[fname].async("string").then(data => {
            let out = processGcode(data);
            zip.file(fname, out);
            zip.file(fname + ".md5", md5(out));

            zip.files[PRINT_CONFIG_FILE_NAME].async("string").then(conf => {
                let cfg = JSON.parse(conf);
                let ends = cfg["filament_end_gcode"];
                for (let i = 0; i < ends.length; i++) {
                    cfg["filament_end_gcode"][i] = "; filament end gcode \nM400 U1\n\n";
                }
                let str = JSON.stringify(cfg);

                zip.file(PRINT_CONFIG_FILE_NAME, str);

                zip.generateAsync({type:"blob"}).then(content => saveAs(content, f.name));
            });
        });
    }).catch(e => {
        alert("Something went wrong!\n\n" + e.message);
    });
});