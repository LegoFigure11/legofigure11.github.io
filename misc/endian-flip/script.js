$("#input").keyup(() => {
    let val = $("#input").val();
    let v = val.replace(/[\s\r\n]|[^a-fA-F0-9]/g, "").split('').reduce((a, e, i) => a + e + (i % 2 === 1 ? ' ' : ''), '').trim().toUpperCase();
    $("#length").text("0x" + (v.length === 0 ? 0 : v.split(" ").length.toString(16).toUpperCase()));
    $("#input").val(v);    
});

function flip() {
    let val = $("#input").val();
    val = val.replace(/\s/g, "");

    if (val.length % 2 !== 0) { return alert("Please enter an even number of hex characters!"); }

    var out = "";
    for (var i = val.length; i > 0 / 2; i = i - 2) {
        out += val.substr(i - 2, 2);
    }
    out = out.split('').reduce((a, e, i) => a + e + (i % 2 === 1 ? ' ' : ''), '').trim().toUpperCase();

    $("#input").val(out);
}