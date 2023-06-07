const SIZE = 800;
//const URL = `https://lorwolf.azureedge.net/rawwolflayers/LayerImage_${pup_breed}_${pattern}_${color}_${pose}_${layer}_${SIZE}.png`;

function generate() {
  var BREED = getBreed($("#w1-breed").val(), $("#w2-breed").val());
  var BASE_COLOR = getColor(
    $("#w1-base-color").val(),
    $("#w2-base-color").val()
  );
  var TOP_GENE = getGenes($("#w1-top").val(), $("#w2-top").val());
  var TOP_COLOR = getColor($("#w1-top-color").val(), $("#w2-top-color").val());
  var UNDER_GENE = getGenes($("#w1-under").val(), $("#w2-under").val());
  var UNDER_COLOR = getColor(
    $("#w1-under-color").val(),
    $("#w2-under-color").val()
  );
  var ACCENT_GENE = getGenes($("#w1-accent").val(), $("#w2-accent").val());
  var ACCENT_COLOR = getColor(
    $("#w1-accent-color").val(),
    $("#w2-accent-color").val()
  );
  var EYES_COLOR = getColor(
    $("#w1-eyes-color").val(),
    $("#w2-eyes-color").val()
  );

  document.getElementById(
    "layer1"
  ).src = `https://lorwolf.azureedge.net/rawwolflayers/LayerImage_${BREED}_${1}_${BASE_COLOR}_Baby_${5}_${SIZE}.png`;
  document.getElementById(
    "layer2"
  ).src = `https://lorwolf.azureedge.net/rawwolflayers/LayerImage_${BREED}_${TOP_GENE}_${TOP_COLOR}_Baby_${4}_${SIZE}.png`;
  document.getElementById(
    "layer3"
  ).src = `https://lorwolf.azureedge.net/rawwolflayers/LayerImage_${BREED}_${UNDER_GENE}_${UNDER_COLOR}_Baby_${3}_${SIZE}.png`;
  document.getElementById(
    "layer4"
  ).src = `https://lorwolf.azureedge.net/rawwolflayers/LayerImage_${BREED}_${ACCENT_GENE}_${ACCENT_COLOR}_Baby_${2}_${SIZE}.png`;
  document.getElementById(
    "layer5"
  ).src = `https://lorwolf.azureedge.net/rawwolflayers/LayerImage_${BREED}_${1}_${EYES_COLOR}_Baby_${1}_${SIZE}.png`;
  document.getElementById(
    "layer6"
  ).src = `https://lorwolf.azureedge.net/rawwolflayers/LayerImage_${BREED}_${1}_${1}_Baby_${0}_${SIZE}.png`;

  var BREED = getBreed($("#w1-breed").val(), $("#w2-breed").val());
  var BASE_COLOR = getColor(
    $("#w1-base-color").val(),
    $("#w2-base-color").val()
  );
  var TOP_GENE = getGenes($("#w1-top").val(), $("#w2-top").val());
  var TOP_COLOR = getColor($("#w1-top-color").val(), $("#w2-top-color").val());
  var UNDER_GENE = getGenes($("#w1-under").val(), $("#w2-under").val());
  var UNDER_COLOR = getColor(
    $("#w1-under-color").val(),
    $("#w2-under-color").val()
  );
  var ACCENT_GENE = getGenes($("#w1-accent").val(), $("#w2-accent").val());
  var ACCENT_COLOR = getColor(
    $("#w1-accent-color").val(),
    $("#w2-accent-color").val()
  );
  var EYES_COLOR = getColor(
    $("#w1-eyes-color").val(),
    $("#w2-eyes-color").val()
  );

  document.getElementById(
    "layer7"
  ).src = `https://lorwolf.azureedge.net/rawwolflayers/LayerImage_${BREED}_${1}_${BASE_COLOR}_Baby_${5}_${SIZE}.png`;
  document.getElementById(
    "layer8"
  ).src = `https://lorwolf.azureedge.net/rawwolflayers/LayerImage_${BREED}_${TOP_GENE}_${TOP_COLOR}_Baby_${4}_${SIZE}.png`;
  document.getElementById(
    "layer9"
  ).src = `https://lorwolf.azureedge.net/rawwolflayers/LayerImage_${BREED}_${UNDER_GENE}_${UNDER_COLOR}_Baby_${3}_${SIZE}.png`;
  document.getElementById(
    "layer10"
  ).src = `https://lorwolf.azureedge.net/rawwolflayers/LayerImage_${BREED}_${ACCENT_GENE}_${ACCENT_COLOR}_Baby_${2}_${SIZE}.png`;
  document.getElementById(
    "layer11"
  ).src = `https://lorwolf.azureedge.net/rawwolflayers/LayerImage_${BREED}_${1}_${EYES_COLOR}_Baby_${1}_${SIZE}.png`;
  document.getElementById(
    "layer12"
  ).src = `https://lorwolf.azureedge.net/rawwolflayers/LayerImage_${BREED}_${1}_${1}_Baby_${0}_${SIZE}.png`;

  var BREED = getBreed($("#w1-breed").val(), $("#w2-breed").val());
  var BASE_COLOR = getColor(
    $("#w1-base-color").val(),
    $("#w2-base-color").val()
  );
  var TOP_GENE = getGenes($("#w1-top").val(), $("#w2-top").val());
  var TOP_COLOR = getColor($("#w1-top-color").val(), $("#w2-top-color").val());
  var UNDER_GENE = getGenes($("#w1-under").val(), $("#w2-under").val());
  var UNDER_COLOR = getColor(
    $("#w1-under-color").val(),
    $("#w2-under-color").val()
  );
  var ACCENT_GENE = getGenes($("#w1-accent").val(), $("#w2-accent").val());
  var ACCENT_COLOR = getColor(
    $("#w1-accent-color").val(),
    $("#w2-accent-color").val()
  );
  var EYES_COLOR = getColor(
    $("#w1-eyes-color").val(),
    $("#w2-eyes-color").val()
  );

  document.getElementById(
    "layer13"
  ).src = `https://lorwolf.azureedge.net/rawwolflayers/LayerImage_${BREED}_${1}_${BASE_COLOR}_Baby_${5}_${SIZE}.png`;
  document.getElementById(
    "layer14"
  ).src = `https://lorwolf.azureedge.net/rawwolflayers/LayerImage_${BREED}_${TOP_GENE}_${TOP_COLOR}_Baby_${4}_${SIZE}.png`;
  document.getElementById(
    "layer15"
  ).src = `https://lorwolf.azureedge.net/rawwolflayers/LayerImage_${BREED}_${UNDER_GENE}_${UNDER_COLOR}_Baby_${3}_${SIZE}.png`;
  document.getElementById(
    "layer16"
  ).src = `https://lorwolf.azureedge.net/rawwolflayers/LayerImage_${BREED}_${ACCENT_GENE}_${ACCENT_COLOR}_Baby_${2}_${SIZE}.png`;
  document.getElementById(
    "layer17"
  ).src = `https://lorwolf.azureedge.net/rawwolflayers/LayerImage_${BREED}_${1}_${EYES_COLOR}_Baby_${1}_${SIZE}.png`;
  document.getElementById(
    "layer18"
  ).src = `https://lorwolf.azureedge.net/rawwolflayers/LayerImage_${BREED}_${1}_${1}_Baby_${0}_${SIZE}.png`;

  var BREED = getBreed($("#w1-breed").val(), $("#w2-breed").val());
  var BASE_COLOR = getColor(
    $("#w1-base-color").val(),
    $("#w2-base-color").val()
  );
  var TOP_GENE = getGenes($("#w1-top").val(), $("#w2-top").val());
  var TOP_COLOR = getColor($("#w1-top-color").val(), $("#w2-top-color").val());
  var UNDER_GENE = getGenes($("#w1-under").val(), $("#w2-under").val());
  var UNDER_COLOR = getColor(
    $("#w1-under-color").val(),
    $("#w2-under-color").val()
  );
  var ACCENT_GENE = getGenes($("#w1-accent").val(), $("#w2-accent").val());
  var ACCENT_COLOR = getColor(
    $("#w1-accent-color").val(),
    $("#w2-accent-color").val()
  );
  var EYES_COLOR = getColor(
    $("#w1-eyes-color").val(),
    $("#w2-eyes-color").val()
  );

  document.getElementById(
    "layer19"
  ).src = `https://lorwolf.azureedge.net/rawwolflayers/LayerImage_${BREED}_${1}_${BASE_COLOR}_Baby_${5}_${SIZE}.png`;
  document.getElementById(
    "layer20"
  ).src = `https://lorwolf.azureedge.net/rawwolflayers/LayerImage_${BREED}_${TOP_GENE}_${TOP_COLOR}_Baby_${4}_${SIZE}.png`;
  document.getElementById(
    "layer21"
  ).src = `https://lorwolf.azureedge.net/rawwolflayers/LayerImage_${BREED}_${UNDER_GENE}_${UNDER_COLOR}_Baby_${3}_${SIZE}.png`;
  document.getElementById(
    "layer22"
  ).src = `https://lorwolf.azureedge.net/rawwolflayers/LayerImage_${BREED}_${ACCENT_GENE}_${ACCENT_COLOR}_Baby_${2}_${SIZE}.png`;
  document.getElementById(
    "layer23"
  ).src = `https://lorwolf.azureedge.net/rawwolflayers/LayerImage_${BREED}_${1}_${EYES_COLOR}_Baby_${1}_${SIZE}.png`;
  document.getElementById(
    "layer24"
  ).src = `https://lorwolf.azureedge.net/rawwolflayers/LayerImage_${BREED}_${1}_${1}_Baby_${0}_${SIZE}.png`;
}
