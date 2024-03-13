import React from "react";
import PropTypes from "prop-types";

function Button({
  className = "w-100 border-0 shadow rounded-4",
  title = "click here",
  disabled = false,
  onClick = () => {},
  type = "button",
}) {
  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      disabled={disabled ? disabled : false}>
      {title}
    </button>
  );
}
Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  title: PropTypes.string,
};

export default Button;
