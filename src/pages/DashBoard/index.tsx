import React, { useContext } from "react";

import { PlayBoard } from "pages/PlayBoard";
import { TodayEvent } from "components/TodayEvent";
import { Leaderboard } from "pages/Leaderboard";

export const DashBoard: React.FC = () => {
    return (
        <div className="flex flex-col h-full w-full">
            <PlayBoard />
            <TodayEvent pastEventShowFlag={true} />
            <Leaderboard />
        </div>
    )
}