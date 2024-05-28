import React, { useContext, useState, useEffect } from "react";
import { Row, Button } from "antd";
import { toast } from "react-toastify";

import globalContext from "../../../context/global/globalContext";
import { GameTypeCaption, JoinWrapper, JoinTitleBar, JoinTableImg, TableNameCaption } from "./styles";

export const JoinRoom = ({ roomName }) => {
  const [roomData, setRoomData] = useState();
  const { setIsTabUpdated, tableNameForJoin, wAddress } = useContext(globalContext);

  useEffect(() => {
    const getRoomData = () => {
      if (!tableNameForJoin || tableNameForJoin === "") {
        console.log("JoinRoom: table Name", tableNameForJoin);
        return;
      }

      try {
        const data = {
          tableName: tableNameForJoin,
        };
        console.log("selected table name for join", tableNameForJoin);
        const token = localStorage.token;
        fetch("/api/tables/getTablebyName", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": token,
          },
          body: JSON.stringify(data),
        }).then((response) => {
          if (response.ok) {
            response.json().then((data) => {
              // console.log(
              //   "get room request is successful." +
              //     JSON.stringify(data, null, 2)
              // );
              if (data && data.resultFlag) {
                // console.log("rooms:" + JSON.stringify(data.room));
                setRoomData(data.room);
              } else {
                console.log("Fail to get room");
              }
            });
          } else {
            console.log("get room data failed with status", response.status);
          }
        });
      } catch (error) {
        console.log("get room data in join room", error);
      }
    };

    getRoomData();
  }, [tableNameForJoin]);

  const joinRoom = (enterFlag) => {
    const data = {
      tableName: roomData?.name,
      gameType: roomData?.gameType,
      buyin: roomData?.limit,
      smallBlind: roomData?.smallBlind,
      maxplayers: roomData?.maxPlayers,
      enterFlag: enterFlag,
      wAddress: wAddress,
    };

    try {
      const token = localStorage.token;

      fetch("/api/tables/joinTable", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify(data)
      }).then((response) => {
        if (response.ok) {
          response.json().then((data) => {
            console.log("Create table request is successful.");
            if (data) {
              if (data.resultFlag) {
                console.log("update tab for new room.");
                setIsTabUpdated(true);
              } else {
                if (data.message) {
                  toast(data.message, {
                    theme: "dark",
                  })                  
                } else {
                  toast("Failed to join room with some reason. Please, try again.", {
                    theme: "dark",
                  })
                }
              }
            } else {
              console.log("Fail to join room.");
            }
          });
        } else {
          console.log(
            "Create table request failed with status " + response.status
          );
        }
      });
    } catch (error) {
      console.log("join room error", error);
    }
  };

  const handleJoin = () => {
    joinRoom(2);
  };

  const handleObserve = () => {
    joinRoom(3);
  };

  return (
    <JoinWrapper>
      <JoinTitleBar>        
        <TableNameCaption>{roomData && roomData.name}</TableNameCaption>
        <GameTypeCaption>{roomData && roomData.gameType}</GameTypeCaption>                    
      </JoinTitleBar>
      <JoinTableImg>
        <GameTypeCaption>Buy-In Range</GameTypeCaption>
        <GameTypeCaption>{roomData && roomData.limit + "sol"}</GameTypeCaption>
      </JoinTableImg>
      <Row justify="center" align="middle" style={{ margin: "5px" }}>
        <Button
          onClick={handleJoin}
          style={{
            backgroundColor: "green",
            color: "white",
            border: "none",
            borderRadius: "2px",
            width: "200px",
          }}
        >
          JOIN
        </Button>
      </Row>
      <Row justify="center" align="middle" style={{ margin: "5px" }}>
        <Button
          onClick={handleObserve}
          style={{
            backgroundColor: "green",
            color: "white",
            border: "none",
            borderRadius: "2px",
            width: "200px",
          }}
        >
          OBSERVE
        </Button>
      </Row>
    </JoinWrapper>
  );
};
