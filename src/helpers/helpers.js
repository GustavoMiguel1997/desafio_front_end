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

export {
  normalizeString,
  formatValueToReal,
  createNumberMask,
  validateDecimal,
};
