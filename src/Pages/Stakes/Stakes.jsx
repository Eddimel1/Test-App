import React, { useCallback, useState } from "react";
import classes from "./Stakes.module.scss";
import { NavBar } from "../../Components/Widgets/NavBar/NavBar";
import { EventContainer } from "../../Components/Widgets/EventContainer/EventContainer";
export const Stakes = () => {
  const [_, force] = useState(false);
  const forceRerender = useCallback(() => {
    force((prev) => !prev);
  }, []);
  return (
    <>
      <NavBar></NavBar>
      <EventContainer forceRerender={forceRerender}></EventContainer>
    </>
  );
};
