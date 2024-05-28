import React, { useContext } from "react";

import ColoredText from "components/Typography/ColoredText";
import RadiusButton from "components/buttons/RadiusButton";
import IntroducePanelTheme from "components/IntroducePanelTheme";
import { SelectedMenuContext } from "context/SelectedMenuContext";
import "pages/Leaderboard/styles.css";

interface leaderTableDataType {
  rank: number;
  player_pubkey: string;
  tokens_won: number;
  hands_won: number;
  hands_played: number;
  win_percent: number;
}

interface leaderTableHeaderInfo {
  name: string;
  left: string;
  top: string;
}

const leaderTableHeaderInfoList: leaderTableHeaderInfo[] = [
  {
    name: "Rank",
    left: "sp-16",
    top: "sp-16",
  },
  {
    name: "Player",
    left: "sp-82",
    top: "sp-16",
  },
  {
    name: "Tokens won",
    left: "sp-532",
    top: "sp-16",
  },
  {
    name: "Hands won",
    left: "sp-654",
    top: "sp-16",
  },
  {
    name: "Hands played",
    left: "sp-761",
    top: "sp-16",
  },
  {
    name: "Win percentage",
    left: "sp-884",
    top: "sp-16",
  },
];

const leaderTableWidthList: number[] = [15, 100, 40, 40, 40, 50];

const leaderTableData: leaderTableDataType[] = [
  {
    rank: 1,
    player_pubkey: "23423423423423432",
    tokens_won: 324,
    hands_won: 3.254,
    hands_played: 23.42,
    win_percent: 24.9,
  },
  {
    rank: 2,
    player_pubkey: "23423423423423432",
    tokens_won: 324,
    hands_won: 3.254,
    hands_played: 23.42,
    win_percent: 24.9,
  },
  {
    rank: 3,
    player_pubkey: "23423423423423432",
    tokens_won: 324,
    hands_won: 3.254,
    hands_played: 23.42,
    win_percent: 24.9,
  },
  {
    rank: 4,
    player_pubkey: "23423423423423432",
    tokens_won: 324,
    hands_won: 3.254,
    hands_played: 23.42,
    win_percent: 24.9,
  },
];

export const Leaderboard: React.FC = () => {
  const { setSelectedMenuKey } = useContext(SelectedMenuContext);

  const handleOpenProfile = () => {
    setSelectedMenuKey("5");
  };

  return (
    <div id="lb-wrapper">
      <div id="lb-top-container" className="flex flex-col mb-sp-77">
        <div className="font-instagram p-0 m-0 text-c-56 text-white leading-none">
          Leaderboard
        </div>
        <div id="lb-timeframe-container">
          <div className="font-instagram p-0 m-0 text-c-16 text-white leading-none">
            Timeframe
          </div>
        </div>
        <div id="lb-full-view-button" />
      </div>
      <div id="lb-main-container">
        <div className="flex flex-col items-center text-c-11 w-sp-1008">
          <table className="border border-collapse border-1 border-custom-secondary rounded-radius-24 overflow-hidden mb-sp-37">
            <tbody>
              <tr className="bg-custom-1 text-custom-secondary">
                {leaderTableHeaderInfoList.map((item, i) => (
                  <td className="p-sp-16">{item.name}</td>
                ))}
              </tr>
              {leaderTableData.map((row, i) => (
                <tr
                  className={
                    i === 0
                      ? "bg-linearGradient-1"
                      : i === 1
                      ? "bg-linearGradient-2"
                      : i === 2
                      ? "bg-linearGradient-3"
                      : i % 2 === 0
                      ? "bg-transparent"
                      : "bg-custom-1"
                  }
                  key={i}
                >
                  <td className={`text-white px-4 py-2 w-t1`}>
                    {row.rank > 3 ? (
                      "#" + row.rank
                    ) : row.rank == 1 ? (
                      <img
                        src="/assets/images/ranking/first_star.png"
                        alt=""
                        className="h-sp-24 w-sp-25"
                      />
                    ) : row.rank == 2 ? (
                      <img
                        src="/assets/images/ranking/second_star.png"
                        alt=""
                        className="h-sp-24 w-sp-25"
                      />
                    ) : (
                      <img
                        src="/assets/images/ranking/third_star.png"
                        alt=""
                        className="h-sp-24 w-sp-25"
                      />
                    )}
                  </td>
                  <td className="text-custom-secondary px-4 py-2 w-t2">
                    {row.player_pubkey}
                  </td>
                  <td className="flex row px-4 py-2 w-t3">
                    <div className="text-white mr-1">{row.tokens_won}</div>
                    <div className="text-custom-secondary">SOL</div>
                  </td>
                  <td className="text-white px-4 py-2 w-t4">{row.hands_won}</td>
                  <td className="text-white px-4 py-2 w-t5">
                    {row.hands_played}
                  </td>
                  <td className="text-white px-4 py-2 w-t6">
                    {row.win_percent}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div id="load_more_button" />
        </div>
        <div id="lb-toprate-container">
          <IntroducePanelTheme>
            <div className="mt-sp-16">
              <div className="font-instagram p-0 m-0 text-c-24 text-white leading-none">
                {leaderTableData[0]?.player_pubkey}
              </div>
              <div className="font-instagram p-0 m-0 text-c-12 text-custom-secondary leading-none">
                Member since
              </div>
            </div>
            <div id="balance_fund_container" className="mb-sp-32">
              <div id="balance_container">
                <div className="font-instagram p-0 m-0 text-c-32 text-white leading-none">
                  1st Place
                </div>
                <div className="font-instagram p-0 m-0 text-c-16 text-custom-secondary leading-none">
                  Last 24h
                </div>
              </div>
            </div>
          </IntroducePanelTheme>
          <div className="flex row mt-sp-16 ml-2 space-x-2">
            <RadiusButton
              width={12.25}
              label="Compare"
              setBorder={true}
              height={1.88}
            />
            <RadiusButton
              width={12.25}
              label="Open profile"
              setBorder={true}
              height={1.88}
              handlerClick={handleOpenProfile}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
