import React, { useEffect, useState, useRef } from "react";
import classes from "./Basket.module.scss";
import { CheckOutlined, CloseOutlined ,DoubleLeftOutlined} from "@ant-design/icons";
import { CommonConfirm } from "../../Shared/Components/Confirms/CommonConfirm.module";
import { Button } from "../../Shared/Components/Buttons/CommonButton";
import { DisplayInfoModal } from "../../Shared/Components/Modals/DisplayInfoModal/DisplayInfoModal";
export const Basket = () => {
  const [allBets, setAllBets] = useState(null);
  const [confirmModal, setConfirmModal] = useState(false);
  const [operation, setOperation] = useState(null);
  const [randomResult, setRandomResult] = useState(null);
  const activeBet = useRef(null);
  console.log(confirmModal);
  const modalMessages = {
    delete: "Are you sure you want to remove your bet?",
    confirm: "Are you sure? it wont be possible to go back!",
  };
  const possibleResults = ["success", "error"];
  console.log(randomResult);
  //recursively collect all the data from the local storage , because we never know the depth
  //all the data inside the localStorage is normalized aka flattened , this is why we increase the counter and use it to get the new data

  const deleteItem = () => {
    window.localStorage.removeItem(`bet/${activeBet.current.id}`);
    const updated_count =
      Number(window.localStorage.getItem("bet_count")) - 1;
    window.localStorage.setItem("bet_count", updated_count);
    console.log(activeBet.current, allBets);
    setAllBets((prev) =>
      prev.filter((bet) => bet.id !== activeBet.current.id)
    );
    setConfirmModal(false);
}
  useEffect(() => {
    const allBets = [];
    const collectAllBetsFromTheLocalStorage = (count) => {
      const bet = JSON.parse(window.localStorage.getItem(`bet/${count}`));
      if (bet) {
        allBets.push(bet);
        const new_count = count + 1;
        collectAllBetsFromTheLocalStorage(new_count);
      } else if (!bet) return;
    };
    // we start from number 2 , can be fixed , but im to lazy to do it :)
    collectAllBetsFromTheLocalStorage(2);
    setAllBets(allBets);
  }, []);

  useEffect(() => {
   
    if (operation?.activeOperation) {
      if (operation.operation === "delete") {
        deleteItem()
      } else if (operation.operation === "confirm") {
        const randomIndex = Math.round(Math.random() * possibleResults.length);
        console.log(randomIndex);
        const randomResult = possibleResults[randomIndex -1];
        console.log("RANDOM RESULT : ", randomResult);
        setConfirmModal(false);
        setRandomResult(randomResult);
        
        window.setTimeout(() => {
          setRandomResult(false);
        }, 3000);
      }
    }
  }, [operation]);
useEffect(()=>{
    if(randomResult && randomResult === 'success') {
       deleteItem()
    }
},[randomResult])
  return (
    <>
      {randomResult && (
        <DisplayInfoModal setActive={setRandomResult}>
          <div
            style={{
              minWidth: "40rem",
              minHeight: "20rem",
              backgroundColor: "white",
              fontSize: "2.5rem",
              position: "relative",
            }}
          >
            {randomResult === "success" ? (
              <div
                style={{
                  color: "green",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                }}
              >
                Transaction is successful , good luck!
              </div>
            ) : (
              <div
                style={{
                  color: "red",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                }}
              >
                Error , please try again !
              </div>
            )}
          </div>
        </DisplayInfoModal>
      )}
      {confirmModal && (
        <CommonConfirm
          showModal={setConfirmModal}
          title={operation.modalMessage}
        >
          <Button
            onClick={() => {
              setOperation((prev)=>({...prev,activeOperation:true}));
            }}
            color="black"
          >
            Yes
          </Button>
          <Button
            onClick={() => {
              setConfirmModal(false);
            }}
            color="black"
          >
            No
          </Button>
        </CommonConfirm>
      )}

      <div className={classes.basketWrapper}>
        <div className={classes.backButtonContainer} onClick={()=>window.location.assign('http://localhost:3000')}>
        <DoubleLeftOutlined style ={{fontSize:'3rem' , cursor:'pointer'}}></DoubleLeftOutlined>
        </div>
     
        <div className={classes.basketContainer}>
          {allBets &&
            allBets.map((bet, i) => {
              return (
                <React.Fragment key={i}>
                  <div className={classes.betContainer}>
                    <div className={classes.betInfo} key={i}>
                      <div className={classes.betTitle}>Bet Info</div>
                      <div>Team 1 : {bet.team1}</div>
                      <div>Team 2 : {bet.team2}</div>
                      <div>Coef 1 : {bet.coefficient1}</div>
                      <div>Coef 2 : {bet.coefficient2}</div>
                    </div>
                    <div className={classes.playerChoice}>
                      <div className={classes.betTitle}>Your Choice</div>
                      <div>Team : {bet.chosenTeam}</div>
                      <div>Coefficient : {bet.chosenCoefficient}</div>
                    </div>
                    <div className={classes.basketOperationsContainer}>
                      <div
                        className={classes.basketOperation}
                        onClick={() => {
                          activeBet.current = bet;
                          setOperation({
                            operation: "confirm",
                            modalMessage: modalMessages.confirm,
                          });
                          setConfirmModal(true);
                        }}
                      >
                        <CheckOutlined
                          style={{
                            fontSize: "2rem",
                            color: "green",
                          }}
                        ></CheckOutlined>
                      </div>
                      <div
                        className={classes.basketOperation}
                        onClick={() => {
                          activeBet.current = bet;
                          setOperation({
                            modalMessage: modalMessages.delete,
                            operation: "delete",
                          });
                          setConfirmModal(true);
                        }}
                      >
                        <CloseOutlined
                          style={{
                            fontSize: "2rem",
                            color: "red",
                          }}
                        ></CloseOutlined>
                      </div>
                    </div>
                  </div>
                  <hr
                    style={{
                      width: "100%",
                      height: "2px",
                      backgroundColor: "rgba(0,0,0,0.8)",
                    }}
                  ></hr>
                </React.Fragment>
              );
            })}
        </div>
      </div>
    </>
  );
};
