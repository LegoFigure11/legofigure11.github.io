const COMMON = 0;
const UNCOMMON = 1;

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
  var r = getColorRange(p1, p2);
  console.log(r);
  return Math.floor(Math.random() * r[1] - r[0] + 1) + r[0];
}
