import React from "react";
import {
  WalletWrapper,
  TitleWrapper,
  SearchOptionWrapper,
  CoinListWrapper,
  CoinListHeader,
  CoinListBody
} from "./styles";

import { AppLayout } from "../../layouts/AppLayout";

import { Input, Checkbox } from 'antd';
import { coinList } from "../../layouts/data";

export const Wallet: React.FC = () => {
  
  return (
    <AppLayout>
      <WalletWrapper>
        <TitleWrapper>
          <h4>Wallet</h4>
          <div>
            {/* eslint-disable jsx-a11y/anchor-is-valid */}
            <a>Find Missing Deposit</a>
            <a>Deposit Withdraw History</a>
          </div>
        </TitleWrapper>
        <SearchOptionWrapper className="323">
          <Input placeholder="Search Coin" size="large" />
          <Checkbox>Hide Small Balances</Checkbox>
        </SearchOptionWrapper>
        <CoinListWrapper>
          <CoinListHeader>
            <span>Coin</span>
            <span>My Wallet</span>
            <span>$USD</span>
            <span>Actions</span>
          </CoinListHeader>
          <CoinListBody>
            {
              coinList.map((item, i) => 
                <div className="coin-list-row" key={i}>
                  <div>
                    <img src={item.img} alt="" width={20} height={20} style={{ maxHeight: '20px', maxWidth: "20px", borderRadius: "50%" }}  />
                    <p>
                      {item.label}
                      {item.isBonus && <img src="/assets/images/bonus.svg" width={30} height={30} style={{ minWidth: "30px", minHeight: "30px" }} alt="" draggable={false} />}
                    </p>
                  </div>  
                  <div>{item.value}{" "}{item.label}</div>  
                  <div>${item.usd}</div>  
                  <div>
                    <button>Withdraw</button>
                    <button>Deposit</button>
                  </div>  
                </div>
              )
            }
          </CoinListBody>
        </CoinListWrapper>
      </WalletWrapper>
    </AppLayout>
  );
};
