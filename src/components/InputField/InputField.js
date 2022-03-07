import React from 'react';
import { createNumberMask } from '../../helpers/helpers';
import searchIcon from '../../resources/images/search.svg';
import './InputField.css';

function InputField({
  label,
  value,
  type,
  hasIcon,
  placeholder,
  alignRight,
  isShorter,
  onChange,
}) {
  const inputContainerClass = 'input-field'.concat(
    isShorter ? ' -shorter' : ''
  );
  const inputClass = 'input-field__input'.concat(
    alignRight ? ' -alignRight' : ''
  );

  function handleChange(e) {
    const { value: InputValue } = e.target;
    const stringSize = InputValue.length;
    let numberWithMask;

    if (stringSize > 3) {
      numberWithMask = createNumberMask(InputValue);
      console.log(numberWithMask);
    }
    onChange(e);
  }

  return (
    <div className={inputContainerClass}>
      {label && <label className='input-field__label'>{label}</label>}
      <input
        type={type}
        value={value}
        className={inputClass}
        placeholder={placeholder}
        onChange={handleChange}
      />
      {hasIcon && <img className='input-field__icon' src={searchIcon} />}
    </div>
  );
}

export default InputField;
