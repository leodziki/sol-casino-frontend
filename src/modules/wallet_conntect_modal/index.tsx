import React, { useEffect, useState } from "react";
import { 
  WalletModalWrapper, 
  WalletModalOverlay, 
  WalletList, 
  ListItem,
  GoLoginText,
  AgreeCheck,
  CloseBtn
} from "./styles";
import isEmpty from "../../utils/isEmpty";
import { connnectWalletList } from "../../layouts/data";
import { useGoogleLogin } from '@react-oauth/google';
// import { googleLogout } from '@react-oauth/google';
import axios from 'axios';
import { useWallet } from "@solana/wallet-adapter-react";

type SidebarProps = {
  isShow: boolean;
  onClose: () => void;
};

export const WalletModal: React.FC<SidebarProps> = ({ isShow, onClose }) => {
  const [ connectList ] = useState(connnectWalletList);
  const { select, wallets } = useWallet();
  const [ user, setUser ] = useState<any>([]);
  const [ profile, setProfile ] = useState<any>([]);

  const login = useGoogleLogin({
    onSuccess: (codeResponse: any) => setUser(codeResponse),
    onError: (error) => console.log('Login Failed:', error)
  });

  useEffect(
    () => {
      if (!isEmpty(user)) {
        axios
          .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
              headers: {
                Authorization: `Bearer ${user.access_token}`,
                Accept: 'application/json'
              }
          })
          .then((res) => {
            setProfile(res.data);
          })
          .catch((err) => console.log(err));
      }
    },
    [ user, profile ]
  );

  // log out function to log the user out of google and set the profile array to null
  // const logOut = () => {
  //   googleLogout();
  //   setProfile(null);
  // };

  return (
    <>
      <WalletModalWrapper $isshow={isShow}>
        <CloseBtn><span onClick={onClose}>&times;</span></CloseBtn>
        <img src="/assets/images/modal-logo.svg" alt="" draggable="false" className="wallet-modal-logo"/>
        <WalletList>
          {
            wallets
              .filter((wallet) => wallet?.readyState === "Installed")
              .map((wallet) => (
                <ListItem
                  key={wallet.adapter.name}
                  onClick={() => select(wallet.adapter.name)}
                >
                  <img src={wallet.adapter.icon} alt="" draggable="false" />
                  {wallet.adapter.name}
                </ListItem>
              )) 
          }
          {
            connectList.map((item, key) => {
              if(key === 3) {
                return (
                  <ListItem key={item.label} onClick={() => login()}>
                    <img src={item.img} alt="" draggable="false" />
                    <span>{item.label}</span>
                  </ListItem>
                )
              } else return (
                  <ListItem key={item.label} onClick={() => alert(item.label) }>
                    <img src={item.img} alt="" draggable="false" />
                    <span>{item.label}</span>
                  </ListItem>
                )
              }
            )
          }
        </WalletList>
        <GoLoginText>
          Already a user?
          <p>
            Login 
            <img src="/assets/images/direction.svg" alt="" draggable="false" />
          </p>
        </GoLoginText>
        <AgreeCheck>
          <input type="checkbox" />
          <span>
            I  agree to the collection of information in cookies, I agree with 
            {/* eslint-disable jsx-a11y/anchor-is-valid */}
            <a>Privacy Policy</a> 
            and with 
            <a>Terms of Use</a>
            , Gambling isn't forbidden by my local authorities and I'm at least 18 years old.
          </span>
        </AgreeCheck>
      </WalletModalWrapper>
      <WalletModalOverlay 
        $isshow={isShow}
        onClick={onClose}
      />
    </>
  );
};
