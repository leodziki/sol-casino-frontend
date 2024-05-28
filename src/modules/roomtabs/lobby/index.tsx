import React, { useEffect, useState } from "react";
import { LuMoon } from "react-icons/lu";
import {
  MdSettings,
  MdHelp,
  MdHeadsetMic,
  MdOutlineWbSunny,
} from "react-icons/md";
import { Switch, Tabs } from "antd";

import { CashGames } from "../";
import { JoinRoom } from "../../../components/lobby/JoinRoom";

import {
  LobbyWrapper,
  LobbyLeftWrapper,
  LobbyRightWrapper,
  LobbyTitleContainer,
  RoomHeader,
  RoomHeaderSection,
  LeaderBoardBtn,
  TabsContainer,
  ProfileWrapper,
  SubInfoWrapper,
  RuleWrapper,
} from "./styles";

// type TabItem = {
//   key: string;
//   label: string;
//   component: JSX.Element;
//   subcomponent: JSX.Element;
// };

export const Lobby: React.FC = () => {
  const [selectedTableName, setSelectedTableName] = useState('');
  const [headerItem, setHeaderItem] = useState([
    {
      icon: <MdSettings size={20} />,
      label: "Preferences",
    },
    {
      icon: <MdHelp size={20} />,
      label: "Help",
    },
    {
      icon: <MdHeadsetMic size={20} />,
      label: "Online Support",
    },
  ]);

  const [tabList, setTabList] = useState([
    {
      key: '2',
      label: "CASH GAMES",
      component: <CashGames setSelectedTableName={setSelectedTableName} />,
      subcomponent: <JoinRoom roomName={selectedTableName} />,
    },
    // {
    //   key: '3',
    //   label: "SPIN & GO",
    //   component: <SpinGo />,
    // },
    // {
    //   key: '4',
    //   label: "TOURNAMENTS",
    //   component: <Tournaments />,
    // },
  ]);

  const [activeTab, setActiveTab] = useState<string>(tabList[0].key);

  const handleTabChange = (activeKey : string) => {
    console.log("handle Tab Change", activeKey);
    setActiveTab(activeKey);
  }

  useEffect(() => {
    console.log("selected table name", selectedTableName);
  }, [selectedTableName]);

  return (
    <LobbyWrapper>
      <LobbyLeftWrapper>
        <RoomHeader>
          <LobbyTitleContainer>
            <img src="/assets/images/room-logo.png" alt="" draggable="false" />
            <img src="/assets/images/Poker_Rooms_caption.png" alt="" draggable="false" />          
          </LobbyTitleContainer>
          <RoomHeaderSection>
            <div className="room-header-setting">
              {headerItem.map((item) => (
                <p key={item.label}>
                  {item.icon}
                  <span>{item.label}</span>
                </p>
              ))}
            </div>
            <div className="room-header-leaderboard">
              <LeaderBoardBtn>LEADERBOARD</LeaderBoardBtn>
              <Switch
                checkedChildren={<LuMoon />}
                unCheckedChildren={<MdOutlineWbSunny />}
                defaultChecked
              />
            </div>
          </RoomHeaderSection>
        </RoomHeader>
        <TabsContainer>
          <Tabs
            onChange={handleTabChange}
            items={tabList.map((item) => {              
              return {
                label: item.label,
                key: item.key,
                children: item.component,
                component: item.subcomponent,
              };
            })}
          />
        </TabsContainer>
      </LobbyLeftWrapper>
      <LobbyRightWrapper>
        {/* <ProfileWrapper>
        </ProfileWrapper> */}
        <SubInfoWrapper>
          {
            tabList.find(tab => tab.key === activeTab)?.subcomponent
          }        
        </SubInfoWrapper>
        {/* <RuleWrapper /> */}
      </LobbyRightWrapper>
    </LobbyWrapper>
  );
};
