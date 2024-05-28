import React, { useState } from "react";
import {
  RoomWrapper,
  RoomHeader,
  RoomHeaderSection,
  LeaderBoardBtn,
  TabsContainer,
  RoomTitle
} from "./styles";

import { Switch, Tabs  } from 'antd';
import { QuickSeat, CashGames, SpinGo } from "../../modules/roomtabs"; 

// import react-icons
import { MdSettings, MdHelp, MdHeadsetMic, MdOutlineWbSunny  } from "react-icons/md";
import { LuMoon } from "react-icons/lu";
import { RiBarChartHorizontalFill } from "react-icons/ri";

import { AppLayout } from "../../layouts/AppLayout";

export const Room: React.FC = () => {
  // @typescript-eslint/no-unused-vars
  const [ headerItem, setHeaderItem ] = useState([
    {
      icon: <MdSettings size={20}/>,
      label: "Preferences"
    },
    {
      icon: <MdHelp size={20} />,
      label: "Help"
    },
    {
      icon: <MdHeadsetMic size={20} />,
      label: "Online Support"
    },
  ]);
  const [ tabList, setTabList ] = useState([
    {
      label: "Poker",
      component: <QuickSeat />
    },
    {
      label: "Turbo poker",
      component: <CashGames />
    },
    {
      label: "Turbo H2H",
      component: <SpinGo />
    }
  ])
  return (
    <AppLayout>
      <RoomWrapper>
        <RoomTitle>
          <RiBarChartHorizontalFill />
          LOBBY
        </RoomTitle>
        <RoomHeader>
          <img src="/assets/images/room-logo.png" alt="" draggable="false" />
          <RoomHeaderSection>
            <div className="room-header-setting">
              {
                headerItem.map((item) => 
                  <p>
                    {item.icon}
                    <span>{item.label}</span>
                  </p>
                )
              }
            </div>
            <div className="room-header-leaderboard">
                <LeaderBoardBtn>LEADERBOARD</LeaderBoardBtn>
                <Switch
                  checkedChildren={<LuMoon />}
                  unCheckedChildren={<MdOutlineWbSunny  />}
                  defaultChecked
                />
            </div>
          </RoomHeaderSection>
        </RoomHeader>
        <TabsContainer>
          <Tabs
            type="card"
            items={tabList.map((item, i) => {
              const id = String(i + 1);
              return {
                label: item.label,
                key: id,
                children: item.component,
              };
            })}
          />
        </TabsContainer>
      </RoomWrapper>
    </AppLayout>
  );
};
