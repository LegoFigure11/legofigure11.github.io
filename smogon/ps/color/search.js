const CHARSET = "0123456789abcdefghijklmnopqrstuvwxyz";

function shuffleArray(array) {
  const shuffledArray = [...array]; 

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); 
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray.join("");
}

function indexToString(index, charset, length) {
  const chars = new Array(length);
  const baseN = CHARSET.length;
  let v = Number(index); // ensure number
  for (let i = 0; i < length; i++) {
    chars[i] = charset[v % baseN];
    v = Math.floor(v / baseN);
  }

  return chars.join('');
}

function search2(start, length, target) {
    const pow = Math.pow(CHARSET.length, length);
    let found = false;
    const chars = shuffleArray(CHARSET);
    for (let i = start + 1; i != start && !found; i = (i + 1) % pow) {
        const name = indexToString(i, chars, length);
        const color = usernameColor(name);
        if (color === target) return name;
    }
}