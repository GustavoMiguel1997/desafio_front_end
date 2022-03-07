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
  const numberWithoutDecimals = removeDecimals(number);
  const numbersArray = numberWithoutDecimals.split('').reverse();
  const arraysOfNumbers = seperateNumberArrayWithDots(numbersArray);

  const result = arraysOfNumbers.flatMap((array, index) => {
    const isLastArray = arraysOfNumbers.length === index + 1;
    if (isLastArray) {
      return array;
    }
    return [...array, '.'];
  });

  const numberWithMask = result.reverse().join('');
  return numberWithMask;
}

function removeDecimals(number) {
  return String(number).split(',')[0];
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

export { normalizeString, formatValueToReal, createNumberMask };
