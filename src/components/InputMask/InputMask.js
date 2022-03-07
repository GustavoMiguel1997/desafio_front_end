import React, { useState, useEffect } from 'react';
import { InputField } from '../';
import { createNumberMask, validateDecimal } from '../../helpers/helpers';

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

  function validateRealValue(valueToValidate) {
    if (valueToValidate.includes(',')) {
      const [integer, decimal] = valueToValidate.replace(',', '.').split('.');
      return `${integer}.${validateDecimal(decimal)}`;
    }
    return valueToValidate;
  }

  function handleChange(e) {
    const newValue = e.target.value.replaceAll('.', '');
    const validatedValue = validateRealValue(newValue);
    onChange(validatedValue);
    setNewVisualValue(newValue);
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
