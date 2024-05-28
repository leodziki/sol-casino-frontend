import React, { useContext, useEffect } from "react";
import { toast } from "react-toastify";

import gameContext from "../../context/game/gameContext";
import socketContext from "../../context/websocket/socketContext";
import commonModalContext from "../../context/modal/commonModalContext";
import globalContext from "../../context/global/globalContext";

import ChattingChannel from "components/game/ChattingChannel";
import { PositionedUISlot } from "../../components/game/PositionedUISlot";
import { PokerTableWrapper } from "../../components/game/PokerTableWrapper";
import { SelectedMenuContext } from 'context/SelectedMenuContext';

import CountdownTimer from "../../components/game/CountdownTimer";
import Seat from "../../components/game/Seat";
import Text from "../../components/Typography/Text";
import { InfoPill } from "../../components/game/InfoPill";
import PokerCard from "../../components/game/PokerCard";
import ChipPot from "../../components/game/ChipPot";
import { Hand } from "../../components/game/Hand";
import LoseOverlay from "../../components/game/LoseOverlay";
import WinOverlay from "../../components/game/WinOverlay";
import EmptyPokerCard from "../../components/game/emptyPokerCard";
import ChipsAmount from '../../components/User/ChipsAmount';
import BetProgressBar from '../../components/game/BetProgressBar';

import {
  CallBtn,
  CheckBtn,
  PotRaiseBtn,
  HalfBetBtn,
  LeaveRoomBtn,
  MaxBetBtn,
  MinBetBtn,
  RoomContainer,
  SettingBtn,
} from "./styles";

import {  
  CHECK  
} from "../../pokergame/actions";

export const Play = ({ roomId, userRole }) => {
  const { socket } = useContext(socketContext);
  const { commonOpenModal } = useContext(commonModalContext);
  const { chipsAmount } = useContext(globalContext);
  const { setSelectedMenuKey } = useContext(SelectedMenuContext);

  const {
    bet,
    messages,
    currentTable,
    isPlayerSeated,
    seatId,
    operationMessage,
    UpdateTableParameters,
    joinTable,
    leaveTable,
    sitDown,
    fold,
    check,
    call,
    raise,
    allin,
  } = useContext(gameContext);

  useEffect(() => {
    !socket &&
      commonOpenModal(
        () => (
          <Text>
            {
              "Could not connect / lost connection to game server! Please try again  later!"
            }
          </Text>
        ),
        "No connection!",
        "Close",
        1,
        () => {}
      );
    console.log("try to join table", roomId);
    socket && joinTable(roomId, userRole);
    return () => {};
    // eslint-disable-next-line
  }, [socket]);

  useEffect(() => {
    // console.log("current table is updated" + JSON.stringify(currentTable));
    currentTable &&
      (currentTable.callAmount > currentTable.bigBlind
        ? UpdateTableParameters(
            currentTable._id,
            currentTable.callAmount,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined
          )
        : currentTable.pot > 0
        ? UpdateTableParameters(
            currentTable._id,
            currentTable.minRaise,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined
          )
        : UpdateTableParameters(
            currentTable._id,
            currentTable.bigBlind,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined
          ));
    if (
      !!currentTable &&
      !!currentTable.seats &&
      !!currentTable.seats[seatId]
    ) {
      if (chipsAmount < bet)
        UpdateTableParameters(
          currentTable._id,
          chipsAmount,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined
        );

      if (currentTable.seats[seatId].sittingOut) {
        showLossScreen();
      }

      if (
        currentTable.handOver &&
        currentTable.history.length > 0 &&
        chipsAmount > currentTable.minBet * 2 &&
        chipsAmount !== currentTable.seats[seatId].orgStack &&
        currentTable.seats.length === 1
      ) {
        showWinScreen();
      }
    }
  }, [currentTable]);

  useEffect(() => {
    console.log("operation error 1: " + operationMessage);
    if (!!operationMessage) {
      toast(operationMessage, {
        theme: "dark",
      });
    }
  }, [operationMessage]);

  const showLossScreen = () => {
    console.log("org stack : " + currentTable.seats[seatId].orgStack);
    document.getElementById("loss-background-div").style.display = "block";
    // document.getElementById("loss-lobby-button").style.display = "block";
  };

  const showWinScreen = () => {
    // document.getElementById("win-background-div").style.display = "block";
    // document.getElementById("win-lobby-button").style.display = "block";
  };

  const generateSeatObjLists = () => {
    let seatObjList = [];
    
    for (let i = 1; i <= currentTable.maxPlayers; i++) {
      seatObjList.push(
        <Seat
          seatNumber={i}
          currentTable={currentTable}
          isPlayerSeated={isPlayerSeated}
          sitDown={sitDown}
          showLossScreen={showLossScreen}
          showWinScreen={showWinScreen}
          userRole={userRole}
        />    
      );
    }

    return seatObjList;
  };

  const handleLeaveRoom = (event) => {
    leaveTable(roomId, userRole);
    setSelectedMenuKey("1");
  };

  const handleSetting = (event) => {
    console.log("handleSetting");
  };

  const handleRaise = () => {
    if (currentTable && currentTable.seats && currentTable.seats[seatId]) {      
      raise(parseFloat(bet) + parseFloat(currentTable.seats[seatId].bet));
    }
  }

  const handleHalfRaise = () => {
    if (currentTable && currentTable.seats && currentTable.seats[seatId]) {      
      raise(parseFloat(chipsAmount / 2));
    }
  }

  const renderGameButtons = () => {
    const ButtonLists = [];
  
    if (currentTable && isPlayerSeated && currentTable.seats && currentTable.seats[seatId] && currentTable.seats[seatId].turn) {
      // ButtonLists.push(<Button key="fold_btn" onClick={fold} type="fold" />);
      let bCheckAvailableFlag = true;
      let bCallAvailableFlag = false;
      
      let maxBet = 0;
      for (let i = 1; i <= currentTable.maxPlayers; i++) {
        if (i != seatId && currentTable.seats[i]) {
          if (currentTable.seats[i].lastAction !== CHECK && currentTable.seats[i].lastAction !== "") {
            bCheckAvailableFlag = false;
          }

          if (currentTable.seats[seatId].bet < currentTable.seats[i].bet) {
            bCheckAvailableFlag = false;
            bCallAvailableFlag = true;
          }

          if (maxBet < currentTable.seats[i].bet) maxBet = currentTable.seats[i].bet;
        }
      }

      if (maxBet < chipsAmount / 2) ButtonLists.push(<HalfBetBtn onClick={handleHalfRaise}/>);
      else ButtonLists.push(<HalfBetBtn type="disabled" />);
      
      if (bCheckAvailableFlag) ButtonLists.push(<CheckBtn onClick={check}/>);
      else ButtonLists.push(<CheckBtn type="disabled" />);

      if (bCallAvailableFlag) ButtonLists.push(<CallBtn onClick={call}/>);
      else ButtonLists.push(<CallBtn type="disabled" />);

      ButtonLists.push(<PotRaiseBtn onClick={handleRaise}/>);
      ButtonLists.push(<MaxBetBtn onClick={allin}/>);  
      ButtonLists.push(<MinBetBtn />);
      
      ButtonLists.push(<ChipsAmount chipsAmount={bet} />);
      ButtonLists.push(<BetProgressBar chipsAmount={chipsAmount} />);
    } else {
      // ButtonLists.push(<Button type="fold_disable" key="fold_disabled_btn"/>);
      ButtonLists.push(<CheckBtn type="disabled" />);
      ButtonLists.push(<CallBtn type="disabled" />);
      ButtonLists.push(<PotRaiseBtn type="disabled" />);
      ButtonLists.push(<MaxBetBtn type="disabled" />);
      ButtonLists.push(<MinBetBtn type="disabled" />);
      ButtonLists.push(<HalfBetBtn type="disabled" />);    
    }
  
    return ButtonLists;
  };

  return (
    <RoomContainer>
      <div className="h-full relative w-full">
        <LeaveRoomBtn onClick={handleLeaveRoom} />
        <SettingBtn onClick={handleSetting} />
        {renderGameButtons()}        
        <LoseOverlay history={""} currentTable={currentTable} seatId={seatId} />
        <WinOverlay
          history={""}
          WinChipCount={
            currentTable &&
            !!currentTable.seats &&
            !!currentTable.seats[seatId] &&
            !!currentTable.seats[seatId].orgStack
              ? currentTable.seats[seatId].orgStack
              : 0
          }
        />
        <ChattingChannel />
          <CountdownTimer />
          <Hand>
            {currentTable &&
              currentTable.seats &&
              currentTable.seats[seatId] &&
              currentTable.seats[seatId].hand &&
              currentTable.seats[seatId].hand.map((card, index) => {
                if (card && card.suit !== "hidden" && card.rank !== "hidden") {
                  return (
                    <PokerCard
                      key={index}
                      card={card}
                      width="4vw"
                      cardindex={index}
                    />
                  );
                } else {
                  return null;
                }
              })}
          </Hand>
          <PokerTableWrapper>
            {currentTable && (
              <>
                {generateSeatObjLists()}
                 <PositionedUISlot
                  width="100%"
                  top="33%"
                  origin="center center"
                  scale="0.60"
                  style={{
                    display: "flex",
                    textAlign: "center",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <ChipPot
                    chipPotCount={
                      currentTable && !!currentTable.mainPot
                        ? currentTable.mainPot
                        : 0
                    }
                  />
                </PositionedUISlot>
                <PositionedUISlot
                  width="100%"
                  origin="center center"
                  top="36%"
                  scale="0.60"
                  style={{
                    display: "flex",
                    textAlign: "center",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {currentTable.board && currentTable.board.length > 0 && (
                    <>
                      {currentTable.board.map((card, index) => (
                        <PokerCard key={index} card={card} />
                      ))}
                    </>
                  )}
                </PositionedUISlot>
                <PositionedUISlot
                  width="100%"
                  origin="center center"
                  scale="0.60"
                  style={{
                    display: "none",
                    textAlign: "center",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <EmptyPokerCard />
                  <EmptyPokerCard />
                  <EmptyPokerCard />
                  <EmptyPokerCard />
                  <EmptyPokerCard />
                </PositionedUISlot>
                <PositionedUISlot
                  bottom="0"
                  left="41%"
                  scale="0.60"
                  origin="bottom center"
                >
                  {messages && messages.length > 0 && (
                    <>
                      {!isPlayerSeated && (
                        <InfoPill>Sit down to join the game!</InfoPill>
                      )}
                    </>
                  )}
                </PositionedUISlot>
                {/* <PositionedUISlot
                  bottom="25%"
                  left="44%"
                  scale="0.60"
                  origin="center center"
                >
                  {currentTable.winMessages &&
                    currentTable.winMessages.length === 0 && (
                      <GameStateInfo currentTable={currentTable} />
                    )}
                </PositionedUISlot> */}
              </>
            )}
          </PokerTableWrapper>        
          </div>
    </RoomContainer>
  );
};
