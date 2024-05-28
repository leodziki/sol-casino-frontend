import React, { useContext, useEffect, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { DownOutlined } from "@ant-design/icons";

import authContext from "context/auth/authContext";
import { SelectedMenuContext } from "context/SelectedMenuContext";
import { WalletModal } from "modules/wallet_conntect_modal";
import ColoredText from "components/Typography/ColoredText";
import SimpleTab from "components/SimpleTab";
import CircleAvatar from "components/Layout/CircleAvatar";

import {
  HeaderNavWrapper,
  HeaderWrapper,
  MintButton as MintBtn,
  NavWrapper,
  SpecialWrapper,
} from "./styles";

import "layouts/styles.css";

interface TabDataType {
  key: Number;
  label: string;
}

const tabDatas: TabDataType[] = [
  {
    key: 1,
    label: "Play",
  },
  {
    key: 2,
    label: "Events",
  },
  {
    key: 3,
    label: "Leaderboard",
  },
  {
    key: 4,
    label: "Rules",
  },
];

export const Header: React.FC = () => {
  const [header, setHeader] = useState(false);
  const { isLoggedIn, login, logout } = useContext(authContext);
  const [isShow, setIsShow] = useState(false);
  const { publicKey, disconnect } = useWallet();
  const { setSelectedMenuKey } = useContext(SelectedMenuContext);

  const onCloseModal = () => {
    setIsShow(false);
  };

  const openWalletModal = () => {
    setIsShow(true);
  };

  const logOut = () => {
    logout();
    disconnect();
  };

  useEffect(() => {
    onCloseModal();
    if (publicKey && !isLoggedIn) {
      login(publicKey.toBase58());
    }
  }, [publicKey]);

  const handleShowSetting = () => {
    setSelectedMenuKey("6");
  };

  return (
    <HeaderWrapper className={`${header ? "header" : ""} bg-linearGradient-6`}>
      <HeaderNavWrapper>
        <SpecialWrapper className="ml-sp-32 mr-sp-570">
          <ColoredText
            text_attr_kinds="other_color"
            emphazised="bold"
            className="text-c-24"
          >
            SOLHOLDEM
          </ColoredText>
        </SpecialWrapper>
        <SimpleTab tabs={tabDatas} />
        <div className="ml-sp-480">
          {!isLoggedIn ? (
            <MintBtn onClick={() => openWalletModal()} $bg={true}>
              <img src="/assets/wallet.png" alt="" />
              Connect
            </MintBtn>
          ) : (
            <div className="user-info-wrapper">
              <div className="user-balance-wrapper bg-custom-secondary">
                <div className="items-center justify-end text-c-16" id="user-balance-container">
                  <ColoredText
                    text_attr_kinds="other_color"                    
                    margin_left="0.816vw"
                  >
                    {0} SOL
                  </ColoredText>
                </div>
                <img
                  className="small-icon-img"
                  src="/assets/sol_plus.png"
                  alt=""
                />
              </div>
              <div className="flex items-center justify-center row" onClick={handleShowSetting}>
                <CircleAvatar avatarImgData={""} sex={""} menuItems={""} />
                <span style={{ fontSize: "0.584vw" }}>
                  <DownOutlined style={{ color: "white" }} />
                </span>
              </div>
            </div>
          )}
        </div>
      </HeaderNavWrapper>
      <WalletModal isShow={isShow} onClose={() => onCloseModal()} />
    </HeaderWrapper>
  );
};
