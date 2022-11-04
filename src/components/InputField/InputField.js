import React from 'react';
import PropTypes from 'prop-types';
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
    isShorter ? ' -shorter' : '',
  );
  const inputClass = 'input-field__input'.concat(
    alignRight ? ' -alignRight' : '',
  );

  return (
    <div className={inputContainerClass}>
      {label && <label className="input-field__label">{label}</label>}
      <input
        type={type}
        value={value}
        className={inputClass}
        placeholder={placeholder}
        onChange={onChange}
      />
      {hasIcon && (
        <img alt="search icon" className="input-field__icon" src={searchIcon} />
      )}
    </div>
  );
}

InputField.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  isShorter: PropTypes.bool,
  hasIcon: PropTypes.bool,
  alignRight: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

InputField.defaultProps = {
  value: '',
  label: '',
  type: 'text',
  isShorter: false,
  alignRight: false,
  hasIcon: false,
};

export default InputField;
