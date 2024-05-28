import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useWallet } from "@solana/wallet-adapter-react";

import { SelectedMenuContext } from "context/SelectedMenuContext";
import ColoredText from "components/Typography/ColoredText";
import globalContext from "context/global/globalContext";
import "components/QuickPlayCard/styles.css";

interface IGameType {
  _id: string;
  game_type: string;
  _v: number;
}

interface IBuyin {
  _id: string;
  price: number;
  _v: number;
}

interface IStake {
  _id: string;
  smallBlind: number;
  bigBlind: number;
  _v: number;
}

interface IMaxplayer {
  _id: string;
  player_count: number;
  _v: number;
}

const QuickPlayCard: React.FC = () => {
  const [tableNameValue, setTableNameValue] = useState("");
  const [gameTypes, setGameTypes] = useState<IGameType[]>([]);
  const [buyins, setBuyins] = useState<IBuyin[]>([]);
  const [stakes, setStakes] = useState<IStake[]>([]);
  const [maxplayers, setMaxplayers] = useState<IMaxplayer[]>([]);

  const { publicKey } = useWallet();
  const { tables, userName } = useContext(globalContext);
  const { setSelectedMenuKey } = useContext(SelectedMenuContext);

  const [selectedGameType, setSelectedGameType] = useState("");
  const [selectedBuyin, setSelectedBuyin] = useState("");
  const [selectedStake, setSelectedStake] = useState("");
  const [selectedMaxplayer, setSelectedMaxplayer] = useState("");

  useEffect(() => {
    const getGameBaseData = () => {
      try {
        fetch("/api/game_base_datas", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }).then((response) => {
          if (response.ok) {
            response.json().then((data) => {
              if (data && data.resultFlag) {
                console.log(
                  "success to get base data",
                  JSON.stringify(data.gameTypes)
                );

                if (data.buyins && data.buyins.length > 0) {
                  setBuyins(data.buyins);
                  setSelectedBuyin(data.buyins[0].price);
                }

                if (data.stakes && data.stakes.length > 0) {
                  setStakes(data.stakes);
                  setSelectedStake(data.stakes[0].smallBlind);
                }

                if (data.maxplayers && data.maxplayers.length > 0) {
                  setMaxplayers(data.maxplayers);
                  setSelectedMaxplayer(data.maxplayers[0].player_count);
                }
              } else {
                console.log("data is not correct.");
              }
            });
          } else {
            console.log(
              "get game base data request failed with status " + response.status
            );
          }
        });
      } catch (error: any) {
        console.log("get game base data request error");
      }
    };

    getGameBaseData();
  }, []);

  const handlePlay = () => {
    if (tableNameValue === "") {
      toast.warning("Please, generate name by click 'Randomize Name'");
      return;
    }

    const joinRoom = (enterFlag: boolean) => {
      const data = {
        tableName: tableNameValue,
        gameType: selectedGameType,
        buyin: selectedBuyin,
        smallBlind: selectedStake,
        maxplayers: selectedMaxplayer,
        enterFlag: enterFlag,
        wAddress: userName,
      };

      try {
        const token = localStorage.token;
        console.log(
          `1:${data.buyin}, 2:${data.smallBlind}, 3:${data.maxplayers}`
        );

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
              if (data) {
                if (data.resultFlag) {
                  setTableNameValue("");
                  setSelectedMenuKey("10");
                  // setIsTabUpdated(true);
                } else {
                  if (data.message) {
                    toast.warning(data.message);
                  } else {
                    toast.warning("Fail to create room.");
                  }
                }
              } else {
                console.log("QUICK_SEAT : Fail to create room.");
              }
            });
          } else {
            console.log(
              "QUICK_SEAT : Create room request failed with status ",
              response.status
            );
          }
        });
      } catch (error) {
        console.log(
          "QUICK_SEAT : create room exception",
          JSON.stringify(error)
        );
      }
    };

    joinRoom(true);
  };

  const onGenerateRandomNameHandler = () => {
    const tableName = Math.random().toString(36).substring(2, 12);
    setTableNameValue(tableName);
  };

  return (
    <div className="quick-card-wrapper">
      <div id="quick-card-title">
        <ColoredText className="font-instagram text-c-24" text_attr_kinds="other_color">
          Quick play
        </ColoredText>
      </div>
      <div id="quick-property-container" className="absolute left-sp-32">
        <div className="quick-property">
          <ColoredText className="text-c-12 mb-sp-8" text_attr_kinds="secondary">
            Minimum buy-in
          </ColoredText>
          <div className="inline-block relative text-c-12 w-full">
            <select
              className="block text-gray-700 appearance-none rounded-lg w-full bg-transparent border border-gray-400 hover:border-gray-500 px-2 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) => setSelectedBuyin(e.target.value)}
            >
              {buyins.map((buyin: IBuyin) => (
                <option key={buyin.price} value={buyin.price}>
                  {buyin.price + " SOL"}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M5 8l5 5 5-5H5z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="quick-property">
          <ColoredText className="text-c-12 mb-sp-8" text_attr_kinds="secondary">
            Small/Big blind
          </ColoredText>
          <div className="inline-block relative text-c-12 w-full">
            <select
              className="block text-gray-700 appearance-none w-full rounded-lg bg-transparent border border-gray-400 hover:border-gray-500 px-2 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) => setSelectedStake(e.target.value)}
            >
              {stakes.map((stake: IStake) => (
                <option key={stake.smallBlind} value={stake.smallBlind}>
                  {stake.smallBlind + " SOL"} / {stake.bigBlind + " SOL"}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M5 8l5 5 5-5H5z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="quick-property">
          <ColoredText className="text-c-12 mb-sp-8" text_attr_kinds="secondary">
            Maximum players
          </ColoredText>
          <div className="inline-block relative text-c-12 w-full">
            <select
              className="block text-gray-700 appearance-none w-full rounded-lg bg-transparent border border-gray-400 hover:border-gray-500 px-2 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) => setSelectedMaxplayer(e.target.value)}
            >
              {maxplayers.map((maxplayer: IMaxplayer) => (
                <option
                  key={maxplayer.player_count}
                  value={maxplayer.player_count}
                >
                  {maxplayer.player_count}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M5 8l5 5 5-5H5z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="quick-property">
          <ColoredText className="text-c-12 mb-sp-8" text_attr_kinds="secondary">
            Visibility
          </ColoredText>
          <div className="inline-block relative text-c-12 w-full">
            <select
              className="block text-gray-700 appearance-none w-full rounded-lg bg-transparent border border-gray-400 hover:border-gray-500 px-2 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) => setSelectedBuyin(e.target.value)}
            >
              <option key={2}>private</option>
              <option key={1}>public</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M5 8l5 5 5-5H5z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div id="quick-card-btm-caption">
        <ColoredText className="font-instagram text-c-16" text_attr_kinds="other_color">
          Bluff Busters
        </ColoredText>
      </div>
      <div
        id="quick-play-rand-name-button"
        onClick={onGenerateRandomNameHandler}
      ></div>
      <div id="quick-play-button" onClick={handlePlay}></div>
      <div className="card-inner-img-wrapper"></div>
    </div>
  );
};

export default QuickPlayCard;
