import React, { useContext, useEffect, useState } from "react";
import {
  BETTING_OPERATION_ERR,
  CALL,
  CHECK,
  FOLD,
  JOIN_TABLE,
  TABLE_FETCHED,
  FETCH_SIT,
  GET_SHOP_ITEM_LIST,
  SHOP_ITEM_FETCHED,
  GET_SETTING_ITEMS,
  SETTING_ITEM_FETCHED,
  LEAVE_TABLE,
  RAISE,
  ALLIN,
  REBUY,
  SIT_DOWN,
  STAND_UP,
  TABLE_JOINED,
  TABLE_LEFT,
  TABLE_UPDATED,
  NEW_CHIP_AMOUNT,
  CHIPAMOUNT_UPDATED,
} from "../../pokergame/actions";
import authContext from "../auth/authContext";
import socketContext from "../websocket/socketContext";
import GameContext from "./gameContext";
import globalContext from "../global/globalContext";

const GameState = ({ children }) => {
  const { socket } = useContext(socketContext);
  const { loadUser } = useContext(authContext);
  const { setChipsAmount, setProfitAmount } = useContext(globalContext);

  const [tableParameters, setTableParameters] = useState({});
  const [bet, setBet] = useState(0);
  const [messages, setMessages] = useState([]);
  const [currentTable, setCurrentTable] = useState(null);  
  const [currentTables, setCurrentTables] = useState([]);
  const [isPlayerSeated, setIsPlayerSeated] = useState(false);
  const [seatId, setSeatId] = useState(null);
  const [turn, setTurn] = useState(false);
  const [tableList, setTableList] = useState(null);
  const [shopItemList, setShopItemList] = useState(null);
  const [settingItemList, setSettingItemList] = useState(null);
  const [operationMessage, setOperationMessage] = useState(null);

  const currentTableRef = React.useRef(currentTable);

  useEffect(() => {
    currentTableRef.current = currentTable;

    isPlayerSeated &&
      seatId &&
      currentTable &&
      currentTable.seats &&
      currentTable.seats[seatId] &&
      turn !== currentTable.seats[seatId].turn &&
      UpdateTableParameters(
        currentTable._id,
        undefined,
        undefined,
        undefined,
        undefined,
        currentTable.seats[seatId].turn,
        undefined
      );
    // setTurn(currentTable.seats[seatId].turn);
    // eslint-disable-next-line
  }, [currentTable]);

  useEffect(() => {
    if (socket) {
      window.addEventListener("unload", leaveTable);
      window.addEventListener("close", leaveTable);

      socket.on(CHIPAMOUNT_UPDATED, ({ chipAmount }) => {
        console.log(CHIPAMOUNT_UPDATED, "chipamount : " + chipAmount);
        setChipsAmount(chipAmount);
      });

      socket.on(NEW_CHIP_AMOUNT, ({ chipAmount, profit }) => {
        console.log(`update chip amount: chip: ${chipAmount}, profit: ${profit}`);
        setChipsAmount(chipAmount);
        setProfitAmount(profit);
      });

      socket.on(TABLE_UPDATED, ({ table, seats, message, from }) => {
        console.log(TABLE_UPDATED, table, message, from);
        table.seats = seats;
        setCurrentTables((currentTables) =>
          currentTables.map((item) => (item._id === table._id ? table : item))
        );

        message && addMessage(table._id, message);
      });

      socket.on(TABLE_JOINED, ({ table, seats }) => {
        console.log(TABLE_JOINED);
        table.seats = seats;
        // console.log("seat count :" + table.seats.length + ", table:" + JSON.stringify(table, null, 2));
        // setCurrentTable(table);
        setCurrentTables((currentTables) => [...currentTables, table]);
        // console.log("TABLE_JOINED tables:", currentTables);
      });
      
      socket.on(BETTING_OPERATION_ERR, ({ operationIndex }) => {
        switch (operationIndex) {
          case 7:
            setOperationMessage("The raise amount should be more than other player's bet amount.");
            break;
          case 4:
            setOperationMessage("Failed to raise. Try again.");
            break;
          case 3:
            setOperationMessage("Failed to call. Try again.");
            break;
        }
      });

      socket.on(FETCH_SIT, ({ sitError }) => {
        console.log(FETCH_SIT, sitError);
        switch (sitError) {
          case 1:
            setOperationMessage("The seat is already full.");
            break;
          case 2:
            setOperationMessage("No Big Blind in this table.");
            break;
          case 3:
            setOperationMessage("You haven't enough money to play.");
            break;
          default:
            break;
        }
      });

      socket.on(TABLE_LEFT, ({ tableId }) => {
        console.log(TABLE_LEFT);
        // setCurrentTable(null);
        setCurrentTables((currentTables) =>
          currentTables.filter((table) => table.id !== tableId)
        );
        loadUser(localStorage.token);
        removeTableParameters(tableId);
        // setMessages([]);
        // setOperationMessage(null);
      });

      socket.on(TABLE_FETCHED, ({ tables }) => {
        console.log(TABLE_FETCHED, tables);
        setTableList(tables);
      });

      socket.on(SHOP_ITEM_FETCHED, ({ shopItems }) => {
        console.log(SHOP_ITEM_FETCHED, shopItems[0].title);
        setShopItemList(shopItems);
      });

      socket.on(SETTING_ITEM_FETCHED, ({ settingItems }) => {
        console.log(SETTING_ITEM_FETCHED, settingItems.avatar);
        setSettingItemList(settingItems);
      });
    }
    return () => {
      if (!!currentTable) {
        console.log("GameState : leave table 1");
        leaveTable(currentTable._id, currentTable.cityId);
      }
    };
    // eslint-disable-next-line
  }, [socket]);

  //exchange seat list for display or logic
  //type: 1 - exchange seat positions in logic to display
  //      2 - exchange seat positions in display to logic
  //seatPositionList: seat position list
  //curSeatPosition : current player's seat position
  //return : exchanged seat positiion list
  const exchangeSeatPositionListToDisplay = (type, seatPositionList, curSeatPosition) => {
    let exSeatPosition = [];
    
    try {
      const seatCount = seatPositionList.length;
      for (let i of seatCount) {
        if (type == 1) {
          if (seatPositionList[i] == curSeatPosition) exSeatPosition[i] = 1;
          else if (seatPositionList[i] > curSeatPosition) exSeatPosition[i] = seatPositionList[i] - curSeatPosition + 1;
          else if (seatPositionList[i] < curSeatPosition) exSeatPosition[i] = seatCount - (curSeatPosition - seatPositionList[i] - 1);
        } else if (type == 2) {
          let temp = seatPositionList[i] + curSeatPosition - 1;
          if (temp > seatCount) exSeatPosition[i] = temp - seatCount;
          else exSeatPosition[i] = temp;          
        }
      }
    } catch (error) {
      console.log("GameState-exchangeSeatPositionListToDisplay: error:", error);
    }

    return exSeatPosition;
  };

  //exchange seat list for display or logic
  //type: 1 - exchange seat positions in logic to display
  //      2 - exchange seat positions in display to logic
  //seatPosition: seat position
  //curSeatPosition : current player's seat position
  //return : exchanged seat positiion
  const exchangeSeatPositionToDisplay = (type, seatPosition, curSeatPosition, seatCount) => {
    let exSeatPosition = 0;
    
    try {
      if (curSeatPosition) {
        if (type == 1) {
          if (seatPosition == curSeatPosition) exSeatPosition = 1;
          else if (seatPosition > curSeatPosition) exSeatPosition = seatPosition - curSeatPosition + 1;
          else if (seatPosition < curSeatPosition) exSeatPosition = seatCount - (curSeatPosition - seatPosition - 1);
        } else if (type == 2) {
          let temp = seatPosition + curSeatPosition - 1;
          if (temp > seatCount) exSeatPosition = temp - seatCount;
          else exSeatPosition = temp;          
        }
      } else exSeatPosition = seatPosition;

      console.log(`type:${type}, sp:${seatPosition}, csp:${curSeatPosition}, sc:${seatCount}, exs:${exSeatPosition}`);
    } catch (error) {
      console.log("GameState-exchangeSeatPositionToDisplay: error:", error);
    }

    return exSeatPosition;
  };

  const joinTable = (tableId, userRole) => {
    console.log(JOIN_TABLE, { tableId, userRole });
    socket.emit(JOIN_TABLE, { tableId, userRole });
  };

  const getShopItems = () => {
    console.log("get shop item" + GET_SHOP_ITEM_LIST);
    socket.emit(GET_SHOP_ITEM_LIST);
  };

  const getSettingDatas = () => {
    console.log(GET_SETTING_ITEMS);
    const token = localStorage.token;
    if (token) socket.emit(GET_SETTING_ITEMS, token);
  };

  const leaveTable = (tableId, userRole) => {
    console.log("leave table 1 tableId:" + tableId);
    if (isPlayerSeated) {
      console.log("leave table 2 : stand up");
      standUp();
    }

    if (
      currentTableRef &&
      currentTableRef.current &&
      currentTableRef.current._id &&
      !!socket
    ) {
      socket.emit(LEAVE_TABLE, { tableId, userRole });
    }

    UpdateTableParameters(
      tableId,
      undefined,
      undefined,
      false,
      null,
      undefined,
      undefined
    );
    // setIsPlayerSeated(false);
    // setSeatId(null);
    //have to close this table
  };

  const sitDown = (tableId, seatPosition) => {
    console.log(
      "try to sit down : tableId: " +
        tableId +
        "seatPoisition : " +
        seatPosition
    );
    !!socket && socket.emit(SIT_DOWN, { tableId, seatPosition });
    UpdateTableParameters(
      tableId,
      undefined,
      undefined,
      true,
      seatPosition,
      undefined,
      undefined
    );

    // setIsPlayerSeated(true);
    // setSeatId(seatPosition);
    console.log("sitdown : set player seated");
  };

  const rebuy = (tableId, seatId, amount) => {
    socket.emit(REBUY, { tableId, seatId, amount });
  };

  const standUp = () => {
    console.log("stand up table");
    currentTableRef &&
      currentTableRef.current &&
      !!socket &&
      socket.emit(STAND_UP, currentTableRef.current._id);
    console.log("standup : set player seated false");

    UpdateTableParameters(
      currentTableRef.current._id,
      undefined,
      undefined,
      false,
      null,
      undefined,
      undefined
    );
    // setIsPlayerSeated(false);
    // setSeatId(null);
  };

  const addMessage = (tableId, message) => {
    UpdateTableParameters(
      tableId,
      undefined,
      message,
      undefined,
      undefined,
      undefined,
      undefined
    );
    // setMessages((prevMessages) => [...prevMessages, message]);
    console.log(message);
  };

  const fold = () => {
    if (currentTableRef && currentTableRef.current) {
      socket.emit(FOLD, currentTableRef.current._id);
    }
  };

  const check = () => {
    if (currentTableRef && currentTableRef.current) {
      socket.emit(CHECK, currentTableRef.current._id);
    }
  };

  const call = () => {
    if (currentTableRef && currentTableRef.current) {
      socket.emit(CALL, currentTableRef.current._id);
    }
  };

  const raise = (amount) => {
    if (currentTableRef && currentTableRef.current) {
      socket.emit(RAISE, { tableId: currentTableRef.current._id, amount });
    }
  };

  const allin = () => {
    if (currentTableRef && currentTableRef.current) {
      socket.emit(ALLIN, currentTableRef.current._id);
    }
  };

  const UpdateTableParameters = (
    tableId,
    bet,
    message,
    isPlayerSeated,
    seatId,
    turn,
    operationMessage
  ) => {
    setTableParameters((prevData) => ({
      ...prevData,
      [tableId]: {
        ...prevData[tableId],
        bet:
          bet !== undefined
            ? bet
            : (prevData[tableId]
            ? prevData[tableId].bet
            : 0),
        isPlayerSeated:
          isPlayerSeated !== undefined
            ? isPlayerSeated
            : (prevData[tableId]
            ? prevData[tableId].isPlayerSeated
            : false),
        seatId:
          seatId !== undefined
            ? seatId
            : (prevData[tableId]
            ? prevData[tableId].seatId
            : ""),
        turn:
          turn !== undefined
            ? turn
            : (prevData[tableId]
            ? prevData[tableId].turn
            : ""),
        operationMessage:
          operationMessage !== undefined
            ? operationMessage
            : (prevData[tableId]
            ? prevData[tableId].operationMessage
            : ""),
        messages: message !== undefined ? [...(prevData[tableId] ? prevData[tableId].messages : []), message] : (prevData[tableId] !== undefined ? prevData[tableId].messages : []),
      },
    }));
  };

  const removeTableParameters = (tableId) => {
    setTableParameters((prevData) => {
      const newData = { ...prevData };
      delete newData[tableId];
      return newData;
    });
  };

  return (
    <GameContext.Provider
      value={{
        bet,
        messages,
        currentTable,
        currentTables,
        isPlayerSeated,
        tableList,
        tableParameters,
        shopItemList,
        settingItemList,
        seatId,
        operationMessage,
        setBet,
        setSettingItemList,
        setCurrentTable,
        setCurrentTables,
        setMessages,
        setIsPlayerSeated,
        setOperationMessage,
        setSeatId,
        setTurn,
        joinTable,
        getShopItems,
        getSettingDatas,
        leaveTable,
        sitDown,
        standUp,
        addMessage,
        fold,
        check,
        call,
        raise,
        allin,
        rebuy,
        UpdateTableParameters,
        exchangeSeatPositionToDisplay,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameState;
