import React from "react";
import { DisplayInfoModal } from "../Modals/DisplayInfoModal/DisplayInfoModal";
import classes from "./CommonConfirm.module.scss";

export const CommonConfirm = ({ showModal, children, title }) => {
  return (
    <DisplayInfoModal setActive={showModal}>
      <div className={classes.container}>
        <div>
          <div>{title}</div>
          <div style={{ marginTop: "0.5rem" }}>{children}</div>
        </div>
      </div>
    </DisplayInfoModal>
  );
};
