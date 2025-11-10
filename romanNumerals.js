let romanNumeralToArabic = {
  M: 1000,
  D: 500,
  C: 100,
  L: 50,
  X: 10,
  V: 5,
  I: 1,
};

function toRomanLazy(num) {
  const romanNumeralPriorityOrder = ["M", "D", "C", "L", "X", "V", "I"];

  // build per-call; don't use a global
  let output = "";
  let difference = num;

  for (let i = 0; i < romanNumeralPriorityOrder.length; i++) {
    let romanLetter = romanNumeralPriorityOrder[i];
    let arabicNumber = romanNumeralToArabic[romanLetter];

    let quotient = Math.floor(difference / arabicNumber);

    if (quotient > 0) {
      output += romanLetter.repeat(quotient);
      difference -= arabicNumber * quotient;
    }

    if (difference === 0) break;
  }

  return output;
}

console.log(toRomanLazy(5250));

function toRoman(num) {
  return "";
}

module.exports = { toRoman, toRomanLazy };
