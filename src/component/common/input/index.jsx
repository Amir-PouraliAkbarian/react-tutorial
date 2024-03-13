import React from "react";
import PropTypes from "prop-types";

function Input({
  id,
  labelValue = "label",
  placeholder = "...",
  className = "w-100 p-2",
  type = "text",
  value = "",
  onChange = () => {},
  classNameContainer,
  labelClassName,
  minLength = 8,
  maxLength = 12,
  disabled = false,
}) {
  return (
    <div className={classNameContainer}>
      <label className={labelClassName} htmlFor={id}>
        {labelValue}
      </label>
      <input
        minLength={minLength}
        maxLength={maxLength}
        className={className}
        placeholder={placeholder}
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
}

Input.propTypes = {
  id: PropTypes.string,
  labelValue: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.oneOf("text", "password", "number", "email"),
  value: PropTypes.string,
  onChange: PropTypes.func,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  disabled: PropTypes.bool,
};

export default Input;
