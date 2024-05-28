import React, { useEffect, useState } from "react";
import {
  HeaderNavWrapper,
  HeaderWrapper,
  MintButton as MintBtn,
} from "./styles";

import { useWallet } from "@solana/wallet-adapter-react";
import { WalletModal } from "../modules/wallet_conntect_modal"

export const Header: React.FC = () => {
  const [header] = useState(false);
  const [ isShow, setIsShow ] = useState(false);
  const { publicKey, disconnect } = useWallet();
  
  const onCloseModal = () => {
    setIsShow(false);
  }

  const openWalletModal = () => {
    setIsShow(true);
  }

  useEffect(() => {
    onCloseModal();
  }, [publicKey])

  return (
    <HeaderWrapper className={header ? "header" : ""}>
      <HeaderNavWrapper>
        <p />
        <div>
          {
            publicKey? "": <MintBtn onClick={() => openWalletModal()}>
              Sign up
            </MintBtn>
          }
          <MintBtn onClick={() => openWalletModal()} $bg={true}>
            <img src="/assets/wallet.png" alt=''/>
            {publicKey 
              ? `${publicKey?.toBase58().substring(0, 2)}...${publicKey?.toBase58().substring(38)}`
              : "Connect"
            }
          </MintBtn>
          {!publicKey? "" : <MintBtn onClick={disconnect}>
            Disconnect
          </MintBtn>}
          
        </div>
      </HeaderNavWrapper>
      <WalletModal
        isShow={isShow}
        onClose={() => onCloseModal()}
      />
    </HeaderWrapper>
  );
};
