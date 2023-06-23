$(".colorDropdown").change(function () {
  if ($(this).attr("class")) {
    $(this).removeClass(
      $(this)
        .attr("class")
        .split(" ")
        .filter((e) => e.startsWith("color-"))
    );
  }
  $(this).addClass("color-" + $(this).find(":selected").text());
});

$(document).ready(function () {
  $("select").each(function () {
    $(this).prop(
      "selectedIndex",
      Math.floor(Math.random() * $(this).find("option").length)
    );
  });
  $("#w1-sex")?.prop("selectedIndex", 0);
  $("#w2-sex")?.prop("selectedIndex", 1);
  parseQueryString();
  setRanges();
  $(".colorDropdown").change();
});

function setRanges() {
  setRange("eyes");
  setRange("accent");
  setRange("under");
  setRange("top");
  setRange("base");
}

function setRange(id) {
  var range = getHTMLforRange(
    $("#w1-" + id + "-color").val(),
    $("#w2-" + id + "-color").val()
  );
  $("#range-" + id).html("");
  for (var el of range[3]) {
    range[2] ? $("#range-" + id).prepend(el) : $("#range-" + id).append(el);
  }
}

const ORDER = [
  "-breed",
  "-sex",
  "-eyes-color",
  "-accent",
  "-accent-color",
  "-under",
  "-under-color",
  "-top",
  "-top-color",
  "-base-color",
];

function parseQueryString() {
  var qs = window.location.href.split("?");
  if (qs.length > 1) {
    var kv = qs.slice(1).join("").split("&");
    console.log(kv);
    for (const key of kv) {
      if (key.startsWith("w")) {
        var section = key.split("=");
        var id = section[0];
        var data = section[1].split(",");
        console.log(id, data);
        for (let i = 0; i < data.length && i < ORDER.length; i++) {
          if (data[i]) {
            var el = document.getElementById(id + ORDER[i]);
            var opt = Array.prototype.filter.call(
              el.options,
              (v) => v.value === data[i]
            );
            if (typeof opt?.[0]?.index !== "undefined") {
              el.selectedIndex = opt[0].index;
              $(el).change();
            }
          }
        }
      }
    }
  }
}

$("select").change(function () {
  var el = document.getElementById("othertool");
  var url = "../" + el.dataset.link + "/";
  url += "?w1=";
  var w1 = [];
  var w2 = [];
  for (const id of ORDER) {
    var _w1 = document.getElementById("w1" + id);
    var _w2 = document.getElementById("w2" + id);
    w1.push(_w1.value || "");
    w2.push(_w2.value || "");
  }

  url += w1.join(",");

  url += "&w2=";
  url += w2.join(",");

  el.href = url;
});
