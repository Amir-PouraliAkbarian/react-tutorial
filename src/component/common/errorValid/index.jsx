import React from "react";
import PropTypes from "prop-types";

function ErrorSpan({ className = "bg-danger", value }) {
  return <span className={className}>{value}</span>;
}

ErrorSpan.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
};

export default ErrorSpan;
