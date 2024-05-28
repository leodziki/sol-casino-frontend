import React, { useContext } from "react";

import globalContext from "context/global/globalContext";

import ColoredText from "components/Typography/ColoredText";
import FourDotButton from "components/icons/FourDotButton";
import IntroducePanelTheme from "components/IntroducePanelTheme";
import QuickPlayCard from "components/QuickPlayCard";
import RadiusButton from "components/buttons/RadiusButton";
import { TableCard } from "components/TableCard";
import { ThemeTableCard } from "components/ThemeTableCard";
import TwoBarButton from "components/icons/TwoBarButton";

import "pages/PlayBoard/styles.css";

const tableBgURIS: string[] = [
  "/assets/images/play_board/bg_1.png",
  "/assets/images/play_board/bg_2.png",
  "/assets/images/play_board/bg_3.png",
];

export const PlayBoard: React.FC = () => {
  const { tables, userName } = useContext(globalContext);

  const onCreateTableHandler = () => {};

  const extractSmallBlindFromStake = (stake: string) => {
    if (!stake) return 0;

    try {
      let parts = stake.split(" sol /");
      return Number(parts[0]);
    } catch (error) {
      console.log("PlayBoard-extractSmallBlindFromStake: error:", error);
    }

    return 0;
  };

  return (
    <div>
      <div id="quick_profile_container">
        <QuickPlayCard />
        <IntroducePanelTheme>
          <div className="mt-sp-16">
            <div>
              <ColoredText text_attr_kinds="other_color" className="text-c-24">
                {userName}
              </ColoredText>
            </div>
            <div>
              <ColoredText text_attr_kinds="secondary" className="text-c-12">
                Member since
              </ColoredText>
            </div>
          </div>
          <div id="balance_fund_container" className="mb-sp-32">
            <div id="balance_container">
              <ColoredText text_attr_kinds="secondary" className="text-c-12">
                Balance
              </ColoredText>
              <ColoredText text_attr_kinds="other_color" className="text-c-16">
                {0} SOL
              </ColoredText>
            </div>
            <div id="add_fund" />
          </div>
        </IntroducePanelTheme>
      </div>
      <div id="poker_table_title" className="flex mb-sp-64 row">
        <div className="font-instagram p-0 m-0 text-c-56 text-white leading-none">
          Poker Tables
        </div>
        <div className="absolute bottom-0 left-sp-417 text-c-16 text-white">
          Sort by
        </div>
        <div className="flex absolute right-0 row top-0">
          <FourDotButton />
          <TwoBarButton />
          <div className="ml-2" onClick={onCreateTableHandler}>
            <RadiusButton
              bgStyle="linearGradient-5"
              height={1.88}
              icon="/assets/plus_icon.png"
              label="Create Table"
              setBorder={false}
              width={7.99}
            />
          </div>
        </div>
      </div>
      <div id="poker_tables_load_container">
        <div className="poker_tables_container">
          {tables?.slice(0, 3).map((table: any, index: number) => (
            <ThemeTableCard
              tableName={table.name}
              bgImageURI={tableBgURIS[index]}
              buyIn={table.buyIn}
              player_count={table.playerCnt}
              max_player_count={table.maxPlayerCnt}
              small_blind={extractSmallBlindFromStake(table.stakes)}
            />
          ))}
        </div>
        <div className="poker_tables_container">
          {tables?.slice(3, 6).map((table: any, index: number) => (
            <TableCard
              tableName={table.name}
              buyIn={table.buyIn}
              player_count={table.playerCnt}
              max_player_count={table.maxPlayerCnt}
              small_blind={extractSmallBlindFromStake(table.stakes)}
            />
          ))}
        </div>
        <div className="poker_tables_container">
          {tables?.slice(6, 9).map((table: any, index: number) => (
            <TableCard
              tableName={table.name}
              buyIn={table.buyIn}
              player_count={table.playerCnt}
              max_player_count={table.maxPlayerCnt}
              small_blind={extractSmallBlindFromStake(table.stakes)}
            />
          ))}
        </div>
        <div id="load_more_button" />
      </div>
    </div>
  );
};
