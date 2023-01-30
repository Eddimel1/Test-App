import { TeamOutlined } from "@ant-design/icons";
import React, { useState, useRef } from "react";
import { Button } from "../../../Shared/Components/Buttons/CommonButton";
import { CommonConfirm } from "../../../Shared/Components/Confirms/CommonConfirm.module";
import classes from "./BettingBox.module.scss";
export const BettingBox = ({ data, forceRerender }) => {
  const { coefficient1, coefficient2, team1, team2, condition } = data;
  const [confirmModal, setConfirmModal] = useState(false);
  const playerChoice = useRef(null);
  //Extend Local Storage functionality
  //All objects are normalized and indexed
  Storage.prototype.setObj = function (key, obj) {
    return this.setItem(key, JSON.stringify(obj));
  };
  Storage.prototype.getObj = function (key) {
    return JSON.parse(this.getItem(key));
  };
  const pushNewBetToTheLocalStorage = () => {
    const { coefficient, team } = playerChoice.current;
    if (!window.localStorage.getItem("bet_count")) {
      window.localStorage.setItem("bet_count", "0");
    }
    console.log(window.localStorage.length - 1);
    const current_bet_count = Number(window.localStorage.getItem("bet_count"));
    console.log(current_bet_count);
    window.localStorage.setItem("bet_count", current_bet_count + 1);
    const updated_count = Number(window.localStorage.getItem("bet_count")) + 1
    window.localStorage.setObj(
      `bet/${updated_count}`,
      {
        id:updated_count,
        coefficient1,
        coefficient2,
        team1,
        team2,
        condition,
        chosenTeam: team,
        chosenCoefficient: coefficient,
      }
    );
    setConfirmModal(false);
    forceRerender();
  };
  return (
    <div className={classes.BettingBoxContainer}>
      {confirmModal && (
        <CommonConfirm showModal={setConfirmModal}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              fontWeight: "700",
            }}
          >
            <div>Event : {condition}</div>
            <div>Team 1 : {team1}</div> <div>Coefficient : {coefficient1}</div>
            <div style={{ marginBottom: "0.5rem" }}>Team 2 {team2}</div>{" "}
            <div style={{ marginBottom: "0.5rem" }}>
              Coefficient : {coefficient2}
            </div>
            <div>
              You placed bet on {playerChoice.current.team} with coefficient{" "}
              {playerChoice.current.coefficient}
            </div>
            <div style={{ marginBottom: "0.5rem" }}>
              Are you sure you want to place the next bet?
            </div>
          </div>

          <Button
            onClick={() => {
              pushNewBetToTheLocalStorage();
            }}
            color="black"
          >
            Yes
          </Button>
          <Button onClick={() => setConfirmModal(false)} color="black">
            No
          </Button>
        </CommonConfirm>
      )}
      <div
        onClick={() => {
          playerChoice.current = {
            coefficient: coefficient1,
            team: team1,
          };
          setConfirmModal(true);
        }}
        className={classes.coefficient}
      >
        Coef : {coefficient1}
      </div>
      <div
        onClick={() => {
          playerChoice.current = {
            coefficient: coefficient2,
            team: team2,
          };
          setConfirmModal(true);
        }}
        className={classes.coefficient}
      >
        Coef : {coefficient2}
      </div>
    </div>
  );
};
