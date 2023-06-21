var BASE_OFFSET = 40;
const SIZE = 800;

function generate() {
  $("#breeding-card-container").removeClass("d-none");
  var ctx = document.getElementById("canvas").getContext("2d");
  var canvas = ctx.canvas;
  var x = canvas.width / 2;

  // Reset canvas
  ctx.globalCompositeOperation = "source-over";
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw background
  if (
    $("#radiocolor").prop("checked") ||
    $("#radiotransparent").prop("checked")
  ) {
    if ($("#radiocolor").prop("checked")) {
      ctx.fillStyle = $("#bg-color").val();
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    placeWolfLayers(ctx, x);
  } else {
    var reader = new FileReader();
    reader.onload = function (e) {
      var bg = new Image();
      bg.onload = function () {
        if (bg.height !== canvas.height)
          window.alert(
            "It is recommended to use a background " +
              canvas.height +
              "px tall (Received: " +
              bg.height +
              "px)."
          );
        if (bg.width !== canvas.width)
          window.alert(
            "It is recommended to use a background " +
              canvas.width +
              "px wide (Received: " +
              bg.width +
              "px)."
          );
        ctx.drawImage(bg, 0, 0);
        placeWolfLayers(ctx, x);
      };
      bg.src = e.target.result;
    };
    var file = document.getElementById("formFile")?.files?.[0];
    if (!file) window.alert("No file found.");
    else reader.readAsDataURL(document.getElementById("formFile").files[0]);
  }
}

function placeWolfLayers(ctx, x) {
  // Place wolf images
  var w1_base = new Image();
  w1_base.onload = function () {
    ctx.drawImage(w1_base, 0, 0, 800, 800, 0, 0, x, x);

    var w1_top = new Image();
    w1_top.onload = function () {
      ctx.drawImage(w1_top, 0, 0, 800, 800, 0, 0, x, x);

      var w1_under = new Image();
      w1_under.onload = function () {
        ctx.drawImage(w1_under, 0, 0, 800, 800, 0, 0, x, x);

        var w1_accent = new Image();
        w1_accent.onload = function () {
          ctx.drawImage(w1_accent, 0, 0, 800, 800, 0, 0, x, x);

          var w1_eyes = new Image();
          w1_eyes.onload = function () {
            ctx.drawImage(w1_eyes, 0, 0, 800, 800, 0, 0, x, x);

            var w1_over = new Image();
            w1_over.onload = function () {
              ctx.drawImage(w1_over, 0, 0, 800, 800, 0, 0, x, x);
              placeElementAsSVG("range-eyes", canvas, BASE_OFFSET + 200);
              placeElementAsSVG("range-accent", canvas, BASE_OFFSET + 230);
              placeElementAsSVG("range-under", canvas, BASE_OFFSET + 260);
              placeElementAsSVG("range-top", canvas, BASE_OFFSET + 290);
              placeElementAsSVG("range-base", canvas, BASE_OFFSET + 320);
              // Write Text
              new FontFace(
                "FontFamily Paytone One",
                "url(https://fonts.gstatic.com/s/paytoneone/v21/0nksC9P7MfYHj2oFtYm2ChTtgPs.woff2)",
                {
                  weight: 400,
                }
              )
                .load()
                .then((f) => {
                  document.fonts.add(f);
                  ctx.fillStyle = $("#font-color").val();
                  ctx.font = '36px "FontFamily Paytone One"';
                  ctx.textAlign = "center";
                  ctx.fillText($("#name").val() || "", x, BASE_OFFSET);
                });
            };
            w1_over.src = `https://lorwolf.azureedge.net/rawwolflayers/LayerImage_${$(
              "#w1-breed"
            ).val()}_1_1_${$("#w1-sex").val()}_0_${SIZE}.png`;
          };
          w1_eyes.src = `https://lorwolf.azureedge.net/rawwolflayers/LayerImage_${$(
            "#w1-breed"
          ).val()}_1_${$("#w1-eyes-color").val()}_${$(
            "#w1-sex"
          ).val()}_1_${SIZE}.png`;
        };
        w1_accent.src = `https://lorwolf.azureedge.net/rawwolflayers/LayerImage_${$(
          "#w1-breed"
        ).val()}_${$("#w1-accent").val()}_${$("#w1-accent-color").val()}_${$(
          "#w1-sex"
        ).val()}_2_${SIZE}.png`;
      };
      w1_under.src = `https://lorwolf.azureedge.net/rawwolflayers/LayerImage_${$(
        "#w1-breed"
      ).val()}_${$("#w1-under").val()}_${$("#w1-under-color").val()}_${$(
        "#w1-sex"
      ).val()}_3_${SIZE}.png`;
    };
    w1_top.src = `https://lorwolf.azureedge.net/rawwolflayers/LayerImage_${$(
      "#w1-breed"
    ).val()}_${$("#w1-top").val()}_${$("#w1-top-color").val()}_${$(
      "#w1-sex"
    ).val()}_4_${SIZE}.png`;
  };
  w1_base.src = `https://lorwolf.azureedge.net/rawwolflayers/LayerImage_${$(
    "#w1-breed"
  ).val()}_1_${$("#w1-base-color").val()}_${$("#w1-sex").val()}_5_${SIZE}.png`;

  // Place wolf images
  var w2_base = new Image();
  w2_base.onload = function () {
    ctx.drawImage(w2_base, 0, 0, 800, 800, x, 0, x, x);

    var w2_top = new Image();
    w2_top.onload = function () {
      ctx.drawImage(w2_top, 0, 0, 800, 800, x, 0, x, x);

      var w2_under = new Image();
      w2_under.onload = function () {
        ctx.drawImage(w2_under, 0, 0, 800, 800, x, 0, x, x);

        var w2_accent = new Image();
        w2_accent.onload = function () {
          ctx.drawImage(w2_accent, 0, 0, 800, 800, x, 0, x, x);

          var w2_eyes = new Image();
          w2_eyes.onload = function () {
            ctx.drawImage(w2_eyes, 0, 0, 800, 800, x, 0, x, x);

            var w2_over = new Image();
            w2_over.onload = function () {
              ctx.drawImage(w2_over, 0, 0, 800, 800, x, 0, x, x);
              placeElementAsSVG("range-eyes", canvas, BASE_OFFSET + 200);
              placeElementAsSVG("range-accent", canvas, BASE_OFFSET + 230);
              placeElementAsSVG("range-under", canvas, BASE_OFFSET + 260);
              placeElementAsSVG("range-top", canvas, BASE_OFFSET + 290);
              placeElementAsSVG("range-base", canvas, BASE_OFFSET + 320);
              // Write Text
              new FontFace(
                "FontFamily Paytone One",
                "url(https://fonts.gstatic.com/s/paytoneone/v21/0nksC9P7MfYHj2oFtYm2ChTtgPs.woff2)",
                {
                  weight: 400,
                }
              )
                .load()
                .then((f) => {
                  document.fonts.add(f);
                  ctx.fillStyle = $("#font-color").val();
                  ctx.font = '36px "FontFamily Paytone One"';
                  ctx.textAlign = "center";
                  ctx.fillText($("#name").val() || "", x, BASE_OFFSET);
                });
            };
            w2_over.src = `https://lorwolf.azureedge.net/rawwolflayers/LayerImage_${$(
              "#w2-breed"
            ).val()}_1_1_${$("#w2-sex").val()}_0_${SIZE}.png`;
          };
          w2_eyes.src = `https://lorwolf.azureedge.net/rawwolflayers/LayerImage_${$(
            "#w2-breed"
          ).val()}_1_${$("#w2-eyes-color").val()}_${$(
            "#w2-sex"
          ).val()}_1_${SIZE}.png`;
        };
        w2_accent.src = `https://lorwolf.azureedge.net/rawwolflayers/LayerImage_${$(
          "#w2-breed"
        ).val()}_${$("#w2-accent").val()}_${$("#w2-accent-color").val()}_${$(
          "#w2-sex"
        ).val()}_2_${SIZE}.png`;
      };
      w2_under.src = `https://lorwolf.azureedge.net/rawwolflayers/LayerImage_${$(
        "#w2-breed"
      ).val()}_${$("#w2-under").val()}_${$("#w2-under-color").val()}_${$(
        "#w2-sex"
      ).val()}_3_${SIZE}.png`;
    };
    w2_top.src = `https://lorwolf.azureedge.net/rawwolflayers/LayerImage_${$(
      "#w2-breed"
    ).val()}_${$("#w2-top").val()}_${$("#w2-top-color").val()}_${$(
      "#w2-sex"
    ).val()}_4_${SIZE}.png`;
  };
  w2_base.src = `https://lorwolf.azureedge.net/rawwolflayers/LayerImage_${$(
    "#w2-breed"
  ).val()}_1_${$("#w2-base-color").val()}_${$("#w2-sex").val()}_5_${SIZE}.png`;
}

function placeElementAsSVG(id, canvas, y) {
  const ctx = canvas.getContext("2d");
  var html =
    '<div style="transform: scale(1, 3); -webkit-transform: scale(1, 3);-moz-transform: scale(1, 3); -o-transform: scale(1, 3); transform-origin: 0% 50%;text-align:center;letter-spacing: -2px;font-size: small;-webkit-text-stroke: 1px!important;-webkit-text-stroke-color: black!important;">';
  var c = document.getElementById(id).children;
  Array.prototype.forEach.call(c, (e) => {
    var o = e.outerHTML;
    var style = window.getComputedStyle(e);
    var parts = o.split("title");
    var text = parts[0] + 'style="color:' + style.color + ';" title' + parts[1];
    html += text;
  });
  html += "</div>";

  var svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${canvas.width}" height="${canvas.height}">
<foreignObject width="100%" height="100%">
    <div xmlns="http://www.w3.org/1999/xhtml">${html}</div>
</foreignObject>
</svg>`;

  const svgBlob = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
  const svgObjectUrl = URL.createObjectURL(svgBlob);

  const img = new Image();
  img.addEventListener("load", function () {
    ctx.drawImage(img, 0, y);
    URL.revokeObjectURL(svgObjectUrl);
  });

  img.src = svgObjectUrl;
}
