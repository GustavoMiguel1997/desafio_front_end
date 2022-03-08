function normalizeString(string) {
  return string
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function formatValueToReal(stringValue) {
  return stringValue.toLocaleString('pt-br');
}

function createNumberMask(number) {
  const [integer, decimal] = separeteIntegerFromDecimal(number);
  const numbersArray = integer.split('').reverse();
  const arraysOfNumbers = seperateNumberArrayWithDots(numbersArray);

  const result = arraysOfNumbers.flatMap((array, index) => {
    const isLastArray = arraysOfNumbers.length === index + 1;
    if (isLastArray) {
      return array;
    }
    return [...array, '.'];
  });

  const validatedDecimal =
    decimal !== undefined ? `,${validateDecimal(decimal)}` : '';
  const numberWithMask = result.reverse().join('');

  return `${numberWithMask}${validatedDecimal}`;
}

function validateDecimal(decimal) {
  return String(decimal).substring(0, 2);
}

function separeteIntegerFromDecimal(number) {
  return String(number).split(',');
}

function seperateNumberArrayWithDots(numbersArray) {
  const placesToBreak = 3;

  const result = numbersArray.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / placesToBreak);
    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }
    resultArray[chunkIndex].push(item);
    return resultArray;
  }, []);
  return result;
}

function validateRealValue(valueToValidate) {
  if (valueToValidate.includes(',')) {
    const [integer, decimal] = valueToValidate.replace(',', '.').split('.');
    return `${integer}.${validateDecimal(decimal)}`;
  }
  return valueToValidate;
}

function removeAllNonNumericCharacters(string) {
  const onlyNumbersRegex = /[^0-9,]/g;
  const onlyDotsAndCommaRegex = /(,.*?),(.*,)?/;
  const validatedNumericString = string
    .replace(onlyNumbersRegex, '')
    .replace(onlyDotsAndCommaRegex, '');
  return validatedNumericString;
}

function validateNumericString(numericString) {
  const newNumericString = removeAllNonNumericCharacters(numericString);
  return validateRealValue(newNumericString);
}

export {
  normalizeString,
  formatValueToReal,
  createNumberMask,
  validateDecimal,
  validateNumericString,
  removeAllNonNumericCharacters,
};
