import React, { useMemo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Landing } from "./pages/landing";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  CloverWalletAdapter,
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  MathWalletAdapter,
  SafePalWalletAdapter,
  CoinbaseWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";

const App: React.FC = () => {
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      // new SolflareWalletAdapter(),
      // new CloverWalletAdapter(),
      // new MathWalletAdapter(),
      // new SafePalWalletAdapter(),
      // new CoinbaseWalletAdapter()
    ],
    []
  );

  const endpoint = useMemo(() => clusterApiUrl("mainnet-beta"), []);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
          </Routes>
        </Router>
        <ToastContainer />
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default App;
