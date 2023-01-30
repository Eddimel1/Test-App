import React from "react";
import classes from "./BettingInfo.module.scss";
export const BettingInfo = ({ data }) => {
  const {
    category,
    league,
    team1,
    team2,
    team1Score,
    team2Score,
    currentTime,
  } = data;
  console.log("PROPS :", data);
  return (
    <div className={classes.bettingInfoContainer}>
      <div className={classes.bettingInfoTop}>
        <div className={classes.bettingCategory}>
          {category} / {league}
        </div>
      </div>
      <div className={classes.bettingInfoCenter}>
        <div className={classes.teamName}>{team1}</div>
        <div className={classes.score}>{team1Score}</div>

        <div className={classes.teamName}>{team2}</div>
        <div className={classes.score}>{team2Score}</div>
        <div className={classes.currentTime}>
            Current Minute : 
            </div>
          <div className={classes.currentTimeCounter}>
            {currentTime}
          </div>
        
      </div>
      <div className={classes.bettingInfoBottom}>
       
      </div>
    </div>
  );
};
