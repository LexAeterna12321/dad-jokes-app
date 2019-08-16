import React from "react";

const IconIndicator = ({ emoji }) => {
  return (
    <span
      className="Joke__icon IconIndicator"
      role="img"
      aria-label={`${emoji} face`}
    >
      {emoji}
    </span>
  );
};

export default IconIndicator;
