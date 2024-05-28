import React, { useState, useContext, useEffect } from "react";
import SolContext from "./SolContext";
import globalContext from "../global/globalContext";
import solanaWeb3, { Connection } from "@solana/web3.js";

const connection: Connection = new Connection(
  solanaWeb3.clusterApiUrl("devnet"),
  "confirmed"
);

interface SolProviderProps {
  children: React.ReactNode;
}

const SolProvider: React.FC<SolProviderProps> = ({ children }) => {
  const { wAddress } = useContext(globalContext);

  const connectWallet = () => {
    const connection = new solanaWeb3.Connection(
      solanaWeb3.clusterApiUrl("devnet"),
      "confirmed"
    );

    const walletKeyPair = solanaWeb3.Keypair.generate();
    const walletPublicKey = walletKeyPair.publicKey;

    console.log(
      "Connected to wallet with public key: ",
      walletPublicKey.toBase58()
    );
  };
  //transAmount : calced in Lamports
  async function transferSol(transAmount: number, targetAddress: string) {
    const fromWallet = solanaWeb3.Keypair.fromSecretKey(
      new Uint8Array([wAddress])
    );
    const toWalletPublicKey = new solanaWeb3.PublicKey(targetAddress);

    const transaction = new solanaWeb3.Transaction().add(
      solanaWeb3.SystemProgram.transfer({
        fromPubkey: fromWallet.publicKey,
        toPubkey: toWalletPublicKey,
        lamports: transAmount, // amount of SOL to send
      })
    );
    transaction.feePayer = fromWallet.publicKey;

    const recentBlockhash = await connection.getLatestBlockhash();
    transaction.recentBlockhash = recentBlockhash.blockhash;

    transaction.sign(fromWallet);
    var txid = await connection.sendRawTransaction(transaction.serialize(), {
      skipPreflight: false,
      preflightCommitment: "singleGossip",
    });

    console.log("Transaction successful with id: ", txid);
  }

  async function getBalance(address: string) {
    const walletAddress = new solanaWeb3.PublicKey(address);
    const balance = await connection.getBalance(walletAddress);

    const solBalance = balance / 1e9;
    console.log(`The wallet has ${solBalance} SOL.`);
    return solBalance;
  }

  return (
    <SolContext.Provider
      value={{
        connectWallet,
        transferSol,
      }}
    >
      {children}
    </SolContext.Provider>
  );
};

export default SolProvider;
