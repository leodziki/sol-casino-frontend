import React, { useContext, useEffect, useState } from "react";
import { RiBarChartHorizontalFill } from "react-icons/ri";
import { Button } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";

import gameContext from "context/game/gameContext";
import globalContext from "context/global/globalContext";
import Footer from "components/game/Footer";
import { Lobby } from "modules/roomtabs";
import { Play } from "modules/games/Play";
import { StyledTabs } from "pages/room/styles";

interface roomType {
  id: string;
  role: number;
  roomTitle: string;
}

export const Room: React.FC = () => {
  const [activeTabKey, setActiveTabKey] = useState("1");
  const [roomList, setRoomList] = useState<roomType[]>([]);
  const {
    currentTables,
    leaveTable,
    setBet,
    setCurrentTable,
    setIsPlayerSeated,
    setSeatId,
    setMessages,
    setTurn,
    setOperationMessage,
    tableParameters,
  } = useContext(gameContext);
  const { isTabUpdated, setIsTabUpdated, isLogoutTriggered } =
    useContext(globalContext);
  const token = localStorage.token;

  const removeRoom = (roomId: string, userRole: number): void => {
    leaveTable(roomId, userRole);
    const modifiedRoomList = roomList.filter((room) => room.id !== roomId);
    setRoomList(modifiedRoomList);
    setActiveTabKey(modifiedRoomList[modifiedRoomList.length - 1]?.id);
  };

  useEffect(() => {
    const getRoomList = () => {
      console.log("get Room List 1");
      setIsTabUpdated(false); //for next time
      try {
        fetch("/api/tables/getTableListbyUser", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": token,
          },
        }).then((response) => {
          if (response.ok) {
            response.json().then((data) => {
              // console.log(
              //   "get room list data request is successful." +
              //     JSON.stringify(data, null, 2)
              // );
              if (data && data.resultFlag) {
                // console.log(
                //   "success to get room list",
                //   JSON.stringify(data.roomList)
                // );
                setRoomList(data.roomList);
                // console.log(
                //   "activeKey:",
                //   data.roomList[data.roomList.length - 1]?.id
                // );
                setActiveTabKey(data.roomList[data.roomList.length - 1]?.id);
              } else {
                console.log("data is not correct.");
              }
            });
          } else {
            console.log(
              "get room list request failed with status " + response.status
            );
          }
        });
      } catch (error: any) {
        console.log("get room list request error");
      }
    };

    getRoomList();
  }, [isTabUpdated]);

  useEffect(() => {
    try {
      if (isLogoutTriggered === true && roomList) {
        roomList.forEach((room) => {
          removeRoom(room.id, room.role);
        });
      }
    } catch (error: any) {
      console.log("room : While remove all room tabs, Error:", error);
    }
  }, [isLogoutTriggered]);

  useEffect(() => {
    try {
      if (activeTabKey !== "1") {
        console.log("active table id:", activeTabKey);
        console.log("active: tables:", currentTables);
        setCurrentTable(
          currentTables.find((table: any) => table._id === activeTabKey)
        );

        if (tableParameters && tableParameters[activeTabKey] !== undefined) {
          setIsPlayerSeated(tableParameters[activeTabKey].isPlayerSeated);
          setSeatId(tableParameters[activeTabKey].seatId);
          setBet(tableParameters[activeTabKey].bet);
          setMessages(tableParameters[activeTabKey].messages);
          setTurn(tableParameters[activeTabKey].turn);
          setOperationMessage(tableParameters[activeTabKey].operationMessage);
        }
      }
    } catch (error: any) {
      console.log("room: active tab changed: error:", error);
    }
  }, [activeTabKey, currentTables, tableParameters]);

  return (
    <div className="font-instagram">
      {roomList.map((room, index) => (
        (room?.id && room?.role) ? <Play roomId={room?.id} userRole={room.role} /> : <></>
      ))}
    </div>
  );
  // return (
  //   // <StyledTabs
  //   //   activeKey={activeTabKey}
  //   //   onChange={(key) => setActiveTabKey(key)}
  //   // >
  //     {/* <StyledTabs.TabPane
  //       tab={
  //         <span style={{ display: "flex", alignItems: "center" }}>
  //           <RiBarChartHorizontalFill />
  //           <span>{"Lobby"}</span>
  //         </span>
  //       }
  //       key="1"
  //     >
  //       <Lobby />
  //     </StyledTabs.TabPane> */}
  //     <div>
  //     {roomList.map((room) => (
  //       // <StyledTabs.TabPane
  //       //   tab={
  //       //     <div style={{ position: "relative", width: "100%" }}>
  //       //       <span>
  //       //         {room.roomTitle.length > 40
  //       //           ? room.roomTitle.substring(0, 40) + "..."
  //       //           : room.roomTitle}
  //       //       </span>
  //       //       <Button
  //       //         type="text"
  //       //         style={{
  //       //           position: "absolute",
  //       //           right: "0%",
  //       //           top: "50%",
  //       //           transform: "translateY(-50%)",
  //       //         }}
  //       //         icon={<CloseCircleOutlined />}
  //       //         onClick={(event) => {
  //       //           event.stopPropagation();
  //       //           removeRoom(room?.id, room.role);
  //       //         }}
  //       //       />
  //       //     </div>
  //       //   }
  //       //   key={room?.id}
  //       // >
  //         {room?.id && room?.role && (
  //           <>
  //             <Play roomId={room?.id} userRole={room.role} />
  //             {/* {room.role === 1 && <Footer roomId={room?.id} />} */}
  //           </>
  //         )}
  //       {/* </StyledTabs.TabPane> */}
  //     ))}
  //     </div>
  //   // // </StyledTabs>
  // );
};
