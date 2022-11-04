import {
  formatValueToReal,
  removeAllNonNumericCharacters,
  separeteIntegerFromDecimal,
  validateDecimal,
  validateNumericString,
  validateRealValue,
} from './numericValidations';

describe('formatValueToReal', () => {
  it('should format value to pt-br string value', () => {
    const result = formatValueToReal(1111.11);
    expect(result).toBe('1.111,11');
  });
});

describe('validateDecimal', () => {
  it('should fix string decimal with two places', () => {
    const result = validateDecimal('1111');
    expect(result).toBe('11');
  });
});

describe('separeteIntegerFromDecimal', () => {
  it('should separate decimal string', () => {
    const [integer, decimal] = separeteIntegerFromDecimal('11,22');
    expect(integer).toBe('11');
    expect(decimal).toBe('22');
  });
});

describe('validateRealValue', () => {
  it('should transform and validate value to real value', () => {
    const result = validateRealValue('11,11');
    expect(result).toBe('11.11');
  });

  it('should return value when is not real value', () => {
    const result = validateRealValue('11');
    expect(result).toBe('11');
  });
});

describe('removeAllNonNumericCharacters', () => {
  it('should rmove all non numeric characters', () => {
    const result = removeAllNonNumericCharacters('1Acse1"~]asd;>>:<;.1');
    expect(result).toBe('111');
  });
});

describe('validateNumericString', () => {
  it('should validate and fix the string number', () => {
    const result = validateNumericString('1Acse1"~]asd;>>:<;,1');
    expect(result).toBe('11.1');
  });
});
