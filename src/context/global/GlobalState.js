import React, { useState } from 'react';
import GlobalContext from './globalContext';

const GlobalState = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLogoutTriggered, setIsLogoutTriggered] = useState(false);
  const [id, setId] = useState(null);
  const [userName, setUserName] = useState(null);
  const [wAddress, setWAddress] = useState(null);
  const [chipsAmount, setChipsAmount] = useState(0);
  const [profitAmount, setProfitAmount] = useState(0);  
  const [tables, setTables] = useState(null);
  const [isTabUpdated, setIsTabUpdated] = useState(false);
  const [shopItems, setShopItems] = useState(null);
  const [players, setPlayers] = useState(null);
  const [peraWallet, setPeraWallet] = useState(null);
  const [tableNameForJoin, setTableNameForJoin] = useState('');

  return (
    <GlobalContext.Provider
      value={{
        isLoading,
        setIsLoading,
        userName,
        setUserName,
        wAddress,
        setWAddress,
        chipsAmount,
        setChipsAmount,
        profitAmount,
        setProfitAmount,
        id,
        setId,
        tables,
        setTables,
        isTabUpdated,
        setIsTabUpdated,
        shopItems,
        setShopItems,
        players,
        setPlayers,
        peraWallet,
        setPeraWallet,
        tableNameForJoin,
        setTableNameForJoin,
        isLogoutTriggered,
        setIsLogoutTriggered,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
