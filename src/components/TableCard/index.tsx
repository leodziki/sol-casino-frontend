import React, { useContext } from "react";
import { toast } from "react-toastify";

import globalContext from "context/global/globalContext";
import ColoredText from "components/Typography/ColoredText";
import { SelectedMenuContext } from "context/SelectedMenuContext";

import "components/TableCard/styles.css";

interface tableInfo {
  buyIn: number;
  customHeight?: number;
  customWidth?: number;
  max_player_count: number;
  player_count: number;
  small_blind: number;
  tableName: string;
}

export const TableCard: React.FC<tableInfo> = ({
  buyIn,
  customHeight,
  customWidth,
  player_count,
  max_player_count,
  small_blind,
  tableName,
}) => {
  const { userName } = useContext(globalContext);
  const { setSelectedMenuKey } = useContext(SelectedMenuContext);

  const joinRoom = (enterFlag: number) => {
    const data = {
      tableName: tableName,
      gameType: "",
      buyin: buyIn,
      smallBlind: small_blind,
      maxplayers: max_player_count,
      enterFlag: enterFlag,
      wAddress: userName,
    };

    try {
      const token = localStorage.token;

      fetch("/api/tables/joinTable", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify(data),
      }).then((response) => {
        if (response.ok) {
          response.json().then((data) => {
            console.log("Create table request is successful.");
            if (data) {
              if (data.resultFlag) {
                console.log("update tab for new room.");
                setSelectedMenuKey("10");
                // setIsTabUpdated(true);
              } else {
                if (data.message) {
                  toast(data.message, {
                    theme: "dark",
                  });
                } else {
                  toast(
                    "Failed to join room with some reason. Please, try again.",
                    {
                      theme: "dark",
                    }
                  );
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

  const handleJoinTable = () => {
    joinRoom(2);
  };

  const handleObserveTable = () => {
    joinRoom(3);
  };

  return (
    <div
      className="table-card-wrapper bg-opacity-95"
      style={
        customHeight
          ? { height: `${customHeight}vw`, width: `${customWidth}vw` }
          : {}
      }
    >
      <div className="table-card-name">
        <div className="font-instagram p-0 m-0 text-c-24 text-white leading-none">
          {tableName}
        </div>
      </div>
      <div className="table-card-buyin-container top-sp-78">
        <div className="font-instagram p-0 m-0 text-c-12 text-custom-secondary leading-none mb-sp-8">
          Buy-in
        </div>
        <div className="font-instagram p-0 m-0 text-c-16 text-white leading-none">
          {buyIn}
        </div>
      </div>
      <div className="table-card-players-container top-sp-78">
        <div className="font-instagram p-0 m-0 text-c-12 text-custom-secondary leading-none mb-sp-8">
          Players
        </div>
        <div className="font-instagram p-0 m-0 text-c-16 text-white leading-none">
          {player_count} / {max_player_count}
        </div>
      </div>
      <div className="table-card-controller-container top-sp-90">
        <div
          className="table-watch-button table-button"
          onClick={handleObserveTable}
        >
          <ColoredText text_attr_kinds="other_color" className="text-c-12">
            Watch
          </ColoredText>
        </div>
        <div
          className="table-join-button table-button"
          onClick={handleJoinTable}
        >
          <ColoredText text_attr_kinds="other_color" className="text-c-12">
            Join Table
          </ColoredText>
        </div>
      </div>
    </div>
  );
};
