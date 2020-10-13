module.exports = function toReadable (number) {
  // number = number.toString();
  const listOfnumbers = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
    100: 'one hundred',
    200: 'two hundred',
    300: 'three hundred',
    400: 'four hundred',
    500: 'five hundred',
    600: 'six hundred',
    700: 'seven hundred',
    800: 'eight hundred',
    900: 'nine hundred',
  }
  number = number + '';
  let result = ''
  if (listOfnumbers[number] !== undefined) {
    return listOfnumbers[number];
  } else {
    if (number.length === 2) {
      if (number[0] === '2') {
        result = `twenty ${listOfnumbers[number[1]]}`;
      } else if (number[0] === '3') {
        result = `thirty ${listOfnumbers[number[1]]}`
      } else if (number[0] === '4') {
        result = `forty ${listOfnumbers[number[1]]}`
      } else if (number[0] === '5') {
        result = `fifty ${listOfnumbers[number[1]]}`
      } else if (number[0] === '6') {
        result = `sixty ${listOfnumbers[number[1]]}`
      } else if (number[0] === '7') {
        result = `seventy ${listOfnumbers[number[1]]}`
      } else if (number[0] === '8') {
        result = `eighty ${listOfnumbers[number[1]]}`
      } else if (number[0] === '9') {
        result = `ninety ${listOfnumbers[number[1]]}`
      }
    } else if (number.length === 3 && number[1] === '0') {
        let hundreds = number[0];
        number = number.slice(2);
        number = +number;
        hundreds = +hundreds;
        return `${toReadable(hundreds)} hundred ${toReadable(number)}`;
    } else if (number.length === 3) {
        let hundreds = number[0];
        number = number.slice(1);
        number = +number;
        hundreds = +hundreds;
        return `${toReadable(hundreds)} hundred ${toReadable(number)}`;
    }
  }
  return result;
}
