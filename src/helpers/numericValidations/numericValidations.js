function formatValueToReal(value) {
  return value.toLocaleString('pt-br');
}

function validateDecimal(decimal) {
  return String(decimal).substring(0, 2);
}

function separeteIntegerFromDecimal(number) {
  return String(number).split(',');
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
  formatValueToReal,
  removeAllNonNumericCharacters,
  separeteIntegerFromDecimal,
  validateDecimal,
  validateNumericString,
  validateRealValue,
};
