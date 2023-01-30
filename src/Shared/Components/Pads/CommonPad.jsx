import React from "react";
import classes from "./CommonPad.module.scss";

export const CommonPad = ({ children, css, ...attr }) => {
  return (
    <div {...attr} style={{ ...css }} className={classes.pad}>
      {children}
    </div>
  );
};
