import {
  separeteIntegerFromDecimal,
  validateDecimal,
} from '../numericValidations/numericValidations';

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

export { createNumberMask, seperateNumberArrayWithDots };
