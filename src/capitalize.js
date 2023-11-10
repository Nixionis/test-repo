function capitalize(string) {
  if (string === "") return "";

  let capitalized = false;
  let result = "";

  for (let i = 0; i < string.length; i += 1) {
    if (/[A-Z]/.test(string[i]) && !capitalized) {
      result += string[i];
      capitalized = true;
    } else if (/[a-z]/.test(string[i]) && !capitalized) {
      result += string[i].toUpperCase();
      capitalized = true;
    } else {
      result += string[i];
    }
  }

  return result;
}

export default capitalize;
