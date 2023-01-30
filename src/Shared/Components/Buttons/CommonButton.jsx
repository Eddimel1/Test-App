import React from "react";

import classes from "./CommonButton.module.scss";

export const Button = ({
  css,
  children,
  disabled,
  options = {},
  color = "black",
  ...atr
}) => {
  const button_class =
    color === "black"
      ? `${classes.black}`
      : color === "light_blue"
      ? `${classes.light_blue}`
      : `${classes.pink}`;
  return (
    <button
      {...atr}
      className={`${classes.button} ${button_class}`}
      style={{ ...options, ...css }}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
