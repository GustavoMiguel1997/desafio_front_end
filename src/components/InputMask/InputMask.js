import React, { useState, useEffect } from 'react';
import { InputField } from '../';
import {
  createNumberMask,
  validateNumericString,
  removeAllNonNumericCharacters,
} from '../../helpers/helpers';

function InputMask({ value, label, placeholder, isShorter, onChange }) {
  const [visualValue, setVisualValue] = useState('');

  useEffect(() => {
    setNewVisualValue(value);
  }, []);

  function setNewVisualValue(newValue) {
    const newVisualValue = formatValue(newValue);
    setVisualValue(newVisualValue);
  }

  function formatValue(valueToFormat) {
    const valueSize = valueToFormat.length;
    if (valueSize > 3) {
      const numberWithMask = createNumberMask(valueToFormat);
      return numberWithMask;
    }
    return valueToFormat;
  }

  function handleChange(e) {
    const { value: inputValue } = e.target;
    const newValue = inputValue.replaceAll('.', '');
    const validatedValue = validateNumericString(newValue);
    onChange(validatedValue);
    setNewVisualValue(removeAllNonNumericCharacters(newValue));
  }

  return (
    <InputField
      alignRight
      isShorter
      value={visualValue}
      label={label}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
}

export default InputMask;
