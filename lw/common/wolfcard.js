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
  $("select").each(function (i, obj) {
    $(this).prop(
      "selectedIndex",
      Math.floor(Math.random() * $(this).find("option").length)
    );
  });
  $("#w1-sex")?.prop("selectedIndex", 0);
  $("#w2-sex")?.prop("selectedIndex", 1);
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
