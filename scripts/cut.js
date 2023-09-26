const concatenateString = (someString, length) =>
  (someString.substring(0, length) + "...").toUpperCase();

console.log(concatenateString("Longer than expected", 5));
