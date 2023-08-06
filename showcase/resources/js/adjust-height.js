$("document").ready(function () {
  $(".adjust-height").each(function () {
    var t = $(this);
    var h = t.height();
    var p = t.parent().height();
    t.css("padding-top", (p - h) / 2 + "px");
  });
});
