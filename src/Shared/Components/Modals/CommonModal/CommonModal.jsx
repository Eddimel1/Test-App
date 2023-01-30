import ReactDOM from "react-dom";
import { useOutside } from "../../../Hooks/useOutside";
import classes from "./CommonModal.module.scss";

export const CommonModal = ({ active, setActive, children }) => {
  const { ref } = useOutside(false, setActive);

  if (active) {
    return ReactDOM.createPortal(
      <div
        className={`${classes.modal} ${
          active ? `${classes.in}` : `${classes.out}`
        }`}
      >
        <div ref={ref} className={classes.container}>
          {children}
        </div>
      </div>,

      document.querySelector("body")
    );
  }
};
