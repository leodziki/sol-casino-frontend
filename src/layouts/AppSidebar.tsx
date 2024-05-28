import React, { useContext, useState } from "react";
// import { GrLanguage } from "react-icons/gr";

import authContext from '../context/auth/authContext';
import {
  AppSidebarWrapper,
  CollapseBtn,
  SearchWrapper,
  SearchBtn,
  GameTitle,
} from "./styles";

import { IoSearchOutline } from "react-icons/io5";

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';

import type { MenuProps } from 'antd';
import { Menu } from 'antd';

import { SelectedMenuContext } from '../context/SelectedMenuContext';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  // getItem(
  //   'Casino', 
  //   'sub1', 
  //   <img src="/assets/images/sidebar/casino.svg" draggable={false} alt="" width={16} height={16} />, 
  //   [
  //   getItem('Favorites', '1'),
  //   getItem('New Release', '2'),
  //   getItem('Originals', '3'),
  //   getItem('All Games', '4'),
  //   getItem('Bonus', '5'),
  //   getItem('Slots', '6'),
  //   getItem('Live Casino', '7'),
  //   getItem('Feature Buy', '8'),
  //   getItem('Casual Games', '9'),
  //   getItem('Roulette', '10'),
  //   getItem('Game Shows', '11'),
  //   getItem('Rng Games', '12'),
  //   getItem('Card', '13'),
  // ]),
  // getItem('Sports', 'sub2', <img src="/assets/images/sidebar/sports.svg" draggable={false} alt="" width={16} height={16} />, [
  //   getItem('My Bets', '14'),
  //   getItem('Live', '15'),
  //   getItem('Football', '16'),
  //   getItem('Basketball', '17'),
  //   getItem('Baseball', '18'),
  //   getItem('American Football', '19'),
  //   getItem('Ice Hockey', '20'),
  //   getItem('Tennis', '21'),
  //   getItem('Handball', '22'),
  //   getItem('Fmma', '23'),
  // ]),
  // getItem('Racing', '24', <img src="/assets/images/sidebar/racing.svg" draggable={false} alt="" width={16} height={16} />),
  // getItem('Bonus War', 'sub3', <img src="/assets/images/sidebar/bonuswar.svg" draggable={false} alt="" width={16} height={16} />, [
  //   getItem('Daily War', '25'),
  //   getItem('Private Wars', '26'),
  // ]),
  // getItem('Crypt Trading', 'sub4', <img src="/assets/images/sidebar/trading.svg" draggable={false} alt="" width={16} height={16} />, [
  // ]),
  // getItem('Earn', 'sub5', <img src="/assets/images/sidebar/earn.svg" draggable={false} alt="" width={16} height={16} />, [
  //   getItem('Rewards', '27'),
  //   getItem('Pool', '28'),
  //   getItem('Bet2Earn', '29'),
  // ]),
  getItem('Poker', '30', <img src="/assets/images/sidebar/poker.svg" draggable={false} alt="" width={16} height={16}  />),
  // getItem('Lottery', '31', <img src="/assets/images/sidebar/lottery.svg" draggable={false} alt="" width={16} height={16}  />),
  // getItem('Lootbox', '32', <img src="/assets/images/sidebar/lootbox.svg" draggable={false} alt="" width={16} height={16}  />),
  // getItem('NFT', '33', <img src="/assets/images/sidebar/nft.svg" draggable={false} alt="" width={16} height={16}  />),
  // getItem('Live Support', '34', <img src="/assets/images/sidebar/support.svg" draggable={false} alt="" width={16} height={16}  />),
  // getItem('Language', 'sub6', <GrLanguage color="#C9FE72"/>, [
  //   getItem('English', '35'),
  //   getItem('日本語', '36'),
  // ]),
];

export const AppSidebar: React.FC = () => {
  const { setSelectedMenuKey } = useContext(SelectedMenuContext);
  const { isLoggedIn } = useContext(authContext);

  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  
  const handleMenuClick = (e: MenuItem) => {
    if (e && e.key && isLoggedIn) {
      console.log(e.key);      
      setSelectedMenuKey(e.key.toString());
    }    
  }

  return (
    <AppSidebarWrapper collapse={collapsed ? '1' : '2'} >
        <SearchWrapper>
          <CollapseBtn onClick={toggleCollapsed} collapse={collapsed ? '1' : '2'}>
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </CollapseBtn>
          <SearchBtn collapse={collapsed ? '1' : '2'}>
            <IoSearchOutline color="#91B760"/>
            <span>Search</span>
          </SearchBtn>
        </SearchWrapper>
        <GameTitle collapse={collapsed ? '1' : '2'}>SOLCASINO GAMES</GameTitle>
        <Menu
          defaultSelectedKeys={['']}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          items={items}
          onClick={handleMenuClick}
        />
      </AppSidebarWrapper>
  );
};
