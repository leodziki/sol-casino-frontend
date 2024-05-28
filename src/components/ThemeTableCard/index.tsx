import React from "react";

import { TableCard } from "components/TableCard";
import "components/ThemeTableCard/styles.css";

interface themetableInfo {
  tableName: string;
  bgImageURI?: string;
  buyIn: number;
  player_count: number;
  max_player_count: number;
  small_blind: number;
}

export const ThemeTableCard: React.FC<themetableInfo> = ({
  bgImageURI,
  tableName,
  buyIn,
  player_count,
  max_player_count,
  small_blind,
}) => {
  return (
    <div
      className="border border-1 border-custom-secondary"
      id="theme-table-wrapper"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL + bgImageURI})` }}
    >
      <div id="theme-table-inner-card">
        <TableCard
          buyIn={buyIn}
          customHeight={7.23}
          customWidth={25}
          max_player_count={max_player_count}
          player_count={player_count}
          small_blind={small_blind}
          tableName={tableName}
        />
      </div>
    </div>
  );
};
