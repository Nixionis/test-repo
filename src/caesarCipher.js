function caesarCipher(string, shiftAmount = 0) {
  const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
  let resultString = "";

  for (let i = 0; i < string.length; i += 1) {
    if (!ALPHABET.includes(string[i].toLowerCase())) {
      resultString += string[i];
      continue;
    }

    const upperCase = !ALPHABET.includes(string[i]);
    let newIndex =
      (ALPHABET.indexOf(string[i].toLowerCase()) + shiftAmount) %
      ALPHABET.length;
    if (newIndex < 0) newIndex = ALPHABET.length + newIndex;

    const newLetter = ALPHABET[newIndex];
    resultString += upperCase ? newLetter.toUpperCase() : newLetter;
  }

  return resultString;
}

export default caesarCipher;
