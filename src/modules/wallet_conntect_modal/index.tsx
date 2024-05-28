import React, { useState, useContext } from "react";
// import { useGoogleLogin } from "@react-oauth/google";
import { useWallet } from "@solana/wallet-adapter-react";
import { type WalletName } from "@solana/wallet-adapter-base";

import {
  WalletModalWrapper,
  WalletModalOverlay,
  WalletList,
  ListItem,
  GoLoginText,
  AgreeCheck,
  CloseBtn,
  TitleContainer,
  TitleImageWrapper,
  TitlePrimaryCaptionWrapper,
  TitleSecondaryCaptionWrapper,
} from "./styles";
import { connnectWalletList } from "../../layouts/data";
import { toast } from "react-toastify";
import authContext from "../../context/auth/authContext";

type SidebarProps = {
  isShow: boolean;
  onClose: () => void;
};

export const WalletModal: React.FC<SidebarProps> = ({ isShow, onClose }) => {
  const [connectList] = useState(connnectWalletList);
  const { wallets, select } = useWallet();
  const [setUser] = useState<any>([]);
  const { login } = useContext(authContext);

  // const loginToGoogle = useGoogleLogin({
  //   onSuccess: (codeResponse: any) => setUser(codeResponse),
  //   onError: (error: any) => console.log("Login Failed:", error),
  // });
  const [isAgreedPolicy, setAgreePoliciy] = useState(false);

  const handlePolicyAgreement = () => {
    setAgreePoliciy(!isAgreedPolicy);
  };
  const selectWallet = (walletName: WalletName | null) => {
    if (isAgreedPolicy) {
      const sUserTmp = "tmp" + new Date().toLocaleTimeString();
      console.log("selectWallet", sUserTmp);
      login(sUserTmp);
      // select(walletName);
    } else {
      toast(`Please read and tick the bottom agreement.`, {
        theme: "dark",
      });
    }
  };

  return (
    <>
      <WalletModalWrapper $isshow={isShow}>
        <CloseBtn>
          <span onClick={onClose}>&times;</span>
        </CloseBtn>
        <TitleContainer>
          <TitleImageWrapper />
          <TitlePrimaryCaptionWrapper />
          <TitleSecondaryCaptionWrapper />
        </TitleContainer>        
        <WalletList>
          {
            // wallets.filter((wallet) => wallet?.readyState === "Installed" || wallet?.readyState === "Loadable").map((wallet) => (
            wallets.map((wallet) => {
              if (
                connectList.filter(
                  (connectable) => wallet.adapter.name === connectable.label
                ).length > 0
              ) {
                if (
                  wallet.readyState === "Installed" ||
                  wallet.readyState === "Loadable"
                ) {
                  return (
                    <ListItem
                      key={wallet.adapter.name}
                      onClick={() => selectWallet(wallet.adapter.name)}
                    >
                      <img src={wallet.adapter.icon} alt="" draggable="false" />
                      {wallet.adapter.name}
                    </ListItem>
                  );
                } else {
                  return (
                    <ListItem
                      key={wallet.adapter.name}
                      onClick={() =>
                        // toast(
                        //   `${wallet.adapter.name} is not supported in your environment`,
                        //   {
                        //     theme: "dark",
                        //   }
                        // )
                        selectWallet(wallet.adapter.name)
                      }
                    >
                      <img src={wallet.adapter.icon} alt="" draggable="false" />
                      {wallet.adapter.name}
                    </ListItem>
                  );
                }
              }
            })
          }
          {connectList.map((item, key) => {
            if (item.type === "web3") {
              if (
                wallets.filter((wallet) => item.label === wallet.adapter.name)
                  .length === 0
              ) {
                return (
                  <ListItem
                    key={item.label}
                    onClick={() =>
                      toast(`Please install the ${item.label} wallet`, {
                        theme: "dark",
                      })
                    }
                  >
                    <img src={item.img} alt="" draggable="false" />
                    <span>{item.label}</span>
                  </ListItem>
                );
              }
            } else {
              // return (
              //   <ListItem key={item.label} onClick={() => loginToGoogle()}>
              //     <img src={item.img} alt="" draggable="false" />
              //     <span>{item.label}</span>
              //   </ListItem>
              // );
            }
            return null; // Default return value
          })}
        </WalletList>
        <GoLoginText>
          Already a user?
          <p>
            Login
            <img src="/assets/images/direction.svg" alt="" draggable="false" />
          </p>
        </GoLoginText>
        <AgreeCheck>
          <input
            type="checkbox"
            checked={isAgreedPolicy}
            onChange={handlePolicyAgreement}
          />
          <span>
            I agree to the collection of information in cookies, I agree with
            {/* eslint-disable jsx-a11y/anchor-is-valid */}
            <a>Privacy Policy</a>
            and with
            <a>Terms of Use</a>, Gambling isn't forbidden by my local
            authorities and I'm at least 18 years old.
          </span>
        </AgreeCheck>
      </WalletModalWrapper>
      <WalletModalOverlay $isshow={isShow} onClick={onClose} />
    </>
  );
};
