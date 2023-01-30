import React, { useEffect, useState } from "react";
import { BettingBox } from "../BettingBox/BettingBox";
import classes from "./BettingContainer.module.scss";
import { MainLoader } from "../../../Shared/Components/Loader/Loader";
import { BettingInfo } from "../BettingInfo/BettingInfo";
import { BettingBoxContainer } from "../BettingBoxContainer/BettingBoxContainer";
export const BettingContainer = ({forceRerender}) => {
  const [data, setData] = useState();

  //fake fetch
  useEffect(() => {
    window.setTimeout(() => {
      import("./../../../Data/FakeApi.json").then((obj) => setData(obj));
    }, 500);
  }, []);
  return (
    <>
      {data?.bettingItems ? (
        <div className={classes.bettingContainer}>
          {data?.bettingItems?.map((item, i) => {
            if (item[0].type === "info") {
              const fakeLiveData = {
                team1Score: Math.round(Math.random() * 8),
                team2Score: Math.round(Math.random() * 8),
                currentTime: Math.round(Math.random() * 90),
              };
              return (
                <BettingInfo
                  data={{ ...item[0], ...fakeLiveData }}
                  key={i}
                ></BettingInfo>
              );
            } else if (item[0].type === "bet") {
              return (
                <BettingBoxContainer
                forceRerender={forceRerender}
                  data={{...item[0]}}
                  key={i}
                ></BettingBoxContainer>
              );
            }
          })}
        </div>
      ) : (
        <MainLoader></MainLoader>
      )}
    </>
  );
};
