const COMMON = 0;
const UNCOMMON = 1;

var COLORS = [
  "Black",
  "Midnight",
  "Slate",
  "Abyss",
  "Chalk",
  "Granite",
  "Shadow",
  "Ash",
  "Fossil",
  "Stone",
  "Dust",
  "Silver",
  "Grey",
  "White",
  "Cloud",
  "Ice",
  "Frost",
  "Rain",
  "Mist",
  "Winter",
  "Storm",
  "Imperial",
  "Wind",
  "Blueberry",
  "Lead",
  "Navy",
  "Indigo",
  "Twilight",
  "Cobalt",
  "Ultramarine",
  "Lake",
  "Azure",
  "Royal",
  "Cornflower",
  "Shroud",
  "Electric",
  "Blue",
  "Cerulean",
  "Rune",
  "River",
  "Sky",
  "Cyan",
  "Glacier",
  "Celeste",
  "Egg",
  "Horizon",
  "Water",
  "Blizzard",
  "Powder",
  "Coast",
  "Mint",
  "Ocean",
  "Jade",
  "Parsley",
  "Turtle",
  "Phthalo",
  "Artichoke",
  "Grass",
  "Emerald",
  "Seaweed",
  "Sage",
  "Clover",
  "Universe",
  "Avocado",
  "Spruce",
  "Vine",
  "Forest",
  "Reed",
  "Basil",
  "Swamp",
  "Frog",
  "Juniper",
  "Pine",
  "Moss",
  "Jungle",
  "Rosemary",
  "Summer",
  "Fern",
  "Venom",
  "Green",
  "Thyme",
  "Lime",
  "Neon",
  "Sprout",
  "Pear",
  "Toxin",
  "Blond",
  "Cream",
  "Banana",
  "Butter",
  "Yellow",
  "Sunrise",
  "Mustard",
  "Apricot",
  "Orange",
  "Ochre",
  "Honeydew",
  "Potato",
  "Pumpkin",
  "Carrot",
  "Autumn",
  "Russet",
  "Cinnamon",
  "Bronze",
  "Caramel",
  "Acorn",
  "Chestnut",
  "Pecan",
  "Umber",
  "Ebony",
  "Chocolate",
  "Seal",
  "Carob",
  "Taupe",
  "Mocha",
  "Silt",
  "Cedar",
  "Mahogany",
  "Bark",
  "Clay",
  "Brown",
  "Tawny",
  "Sepia",
  "Hazelnut",
  "Elm",
  "Seed",
  "Fawn",
  "Ginger",
  "Tan",
  "Beige",
  "Oak",
  "Sand",
  "Oyster",
  "Blossom",
  "Peony",
  "Coral",
  "Salmon",
  "Hibiscus",
  "Tomato",
  "Azalea",
  "Watermelon",
  "Rust",
  "Scarlet",
  "Lava",
  "Red",
  "Saffron",
  "Strawberry",
  "Crimson",
  "Radish",
  "Maroon",
  "Auburn",
  "Cherry",
  "Carmine",
  "Blood",
  "Garnet",
  "Cranberry",
  "Rosewood",
  "Currant",
  "Burgundy",
  "Beetroot",
  "Amaranth",
  "Sunset",
  "Ruby",
  "Fuchsia",
  "Rose",
  "Pink",
  "Cerise",
  "Tulip",
  "Spring",
  "Peach",
  "Carnation",
  "Begonia",
  "Flamingo",
  "Blush",
  "Quartz",
  "Pastel",
  "Pearl",
  "Thistle",
  "Pansy",
  "Lavender",
  "Lilac",
  "Foxglove",
  "Orchid",
  "Heather",
  "Iris",
  "Jacaranda",
  "Violet",
  "Iolite",
  "Purple",
  "Eminence",
  "Grape",
  "Amethyst",
  "Mauve",
  "Wolfsbane",
  "Fig",
  "Acai",
  "Haze",
  "Elderberry",
  "Eggplant",
  "Onion",
  "Plum",
];

const breeds = [
  COMMON, // Lupin
  COMMON, // Jocol
  COMMON, // Kit
  UNCOMMON, // Bracchus
  UNCOMMON, // Zerda
  UNCOMMON, // Volmyr
];

const genes = [
  COMMON, // Timber
  COMMON, // Brush
  COMMON, // Cozen
  COMMON, // Merle
  UNCOMMON, // Maned
  UNCOMMON, // Stripes
];

function getColorRange(p1, p2) {
  return [parseInt(p1), parseInt(p2)].sort((a, b) => {
    return a - b;
  });
}

function getHTMLforRange(p1, p2) {
  var cols = [parseInt(p1), parseInt(p2)].sort((a, b) => {
    return a - b;
  });
  var delta = cols[1] - cols[0];
  var mid = Math.ceil(COLORS.length / 2);
  var minIdx = cols[0] - 1;
  var maxIdx = cols[1] - 1;
  var backwards = delta >= mid;
  var html = [];
  if (backwards) {
    for (var i = minIdx; i >= 0; i--) {
      html.push(
        "<span data-value='" +
          (i + 1) +
          "' class='range-" +
          COLORS[i] +
          "' title='" +
          COLORS[i] +
          "'>&#x25A0;</span>"
      );
    }
    for (var i = COLORS.length - 1; i >= maxIdx; i--) {
      html.push(
        "<span data-value='" +
          (i + 1) +
          "' class='range-" +
          COLORS[i] +
          "' title='" +
          COLORS[i] +
          "'>&#x25A0;</span>"
      );
    }
  } else {
    for (var i = minIdx; i <= maxIdx; i++) {
      html.push(
        "<span data-value='" +
          (i + 1) +
          "' class='range-" +
          COLORS[i] +
          "' title='" +
          COLORS[i] +
          "'>&#x25A0;</span>"
      );
    }
  }
  return [cols[0], cols[1], backwards, html];
}

function getGenes(p1, p2) {
  p1 = parseInt(p1);
  p2 = parseInt(p2);
  if (p1 === p2) return p1;
  var rarity1 = genes[p1 - 1];
  var rarity2 = genes[p2 - 1];
  var rand = Math.floor(Math.random() * 100);
  if (rarity1 === rarity2) return rand < 50 ? p1 : p2;
  var common = rarity1 === COMMON ? p1 : p2;
  var uncommon = rarity1 === COMMON ? p2 : p1;
  return rand < 75 ? common : uncommon;
}

function getBreed(p1, p2) {
  p1 = parseInt(p1);
  p2 = parseInt(p2);
  if (p1 === p2) return p1;
  var rarity1 = breeds[p1 - 7];
  var rarity2 = breeds[p2 - 7];
  var rand = Math.floor(Math.random() * 100);
  if (rarity1 === rarity2) return rand < 50 ? p1 : p2;
  var common = rarity1 === COMMON ? p1 : p2;
  var uncommon = rarity1 === COMMON ? p2 : p1;
  return rand < 75 ? common : uncommon;
}

function getColor(p1, p2) {
    var r = getHTMLforRange(p1, p2);
    return r[3][Math.floor(Math.random() * r[3].length)].split("'")[1];
}
