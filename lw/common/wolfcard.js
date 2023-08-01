const TICK = "&#x2714;";
const CROSS = "&#x274c;";

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
  setRanges();
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
  $(".colorDropdown").change();
  $(".breed-or-gene-select").change();
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
  if (document.getElementById("target")) {
    var t = $("#target-" + id + "-color").val();
    var exists =
      range[3].filter((e) => e.includes("value='" + t + "'")).length > 0;
    $("#test-" + id + "-color").html(exists ? TICK : CROSS);
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
    for (const key of kv) {
      if (key.startsWith("w")) {
        var section = key.split("=");
        var id = section[0];
        var data = section[1].split(",");
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

$(".breed-or-gene-select").change(function () {
  if (document.getElementById("target")) {
    var id = $(this).attr("id").split("-")[1];
    var test = $("#target-" + id).val();
    $("#test-" + id).html(
      test == $("#w1-" + id).val() || test == $("#w2-" + id).val()
        ? TICK
        : CROSS
    );
  }
});

$("select").change(function () {
  var el = document.getElementById("othertool");
  var url = "../" + xssEscape(el.dataset.link) + "/";
  var qs = generateQueryString();
  el.href = url + qs;
});

function generateQueryString() {
  var qs = "?w1=";
  var w1 = [];
  var w2 = [];
  for (const id of ORDER) {
    var _w1 = document.getElementById("w1" + id);
    var _w2 = document.getElementById("w2" + id);
    w1.push(_w1.value || "");
    w2.push(_w2.value || "");
  }

  qs += w1.join(",");

  qs += "&w2=";
  qs += w2.join(",");
  return xssEscape(qs);
}

$("#sharelink").click(function () {
  var link =
    window.location.origin + window.location.pathname + generateQueryString();
  navigator.clipboard.writeText(link);
  var tt = document.getElementById("sharelink");
  var tooltip = bootstrap.Tooltip.getInstance(tt);
  setTimeout(function () {
    tooltip.hide();
  }, 2_500);
});
