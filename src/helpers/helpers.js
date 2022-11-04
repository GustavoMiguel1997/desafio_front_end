import normalizeString from './stringValidations/stringValidations';
import { createNumberMask } from './numberMask/numberMask';
import {
  formatValueToReal,
  validateDecimal,
  validateNumericString,
  removeAllNonNumericCharacters,
} from './numericValidations/numericValidations';

export {
  normalizeString,
  formatValueToReal,
  createNumberMask,
  validateDecimal,
  validateNumericString,
  removeAllNonNumericCharacters,
};
