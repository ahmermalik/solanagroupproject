import React, { useState, useEffect } from "react";
import Home from "./Home/index";
import Profile from "./Profile/index";
import NFTs from "./data";
import { WalletAdapterNetwork, WalletError } from '@solana/wallet-adapter-base';
import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";
import "./App.scss";

function App() {
  const network = WalletAdapterNetwork.Devnet;
  
  const [view, setView] = useState("home");
  const [nfts, setNfts] = useState();

  useEffect(() => {
    setNfts(NFTs);
  }, [nfts]);

  useEffect(() => {
    // useeffect to call solana api to gather user account information/nft ownership data
  }, []);

  const updateView = (e) => {
    setView(e);
  };
  const renderView = () => {
    if (view === "home") {
      return <Home  nfts={nfts}/>;
    } else if (view === "profile") {
      return <Profile />;
    } else {
      return <div>Loading....</div>;
    }
  };

  return (
    <div className="">
      <div className="nav-bar">
        NFT Market Place Group 2 {view}
        <button
          onClick={(e) => {
            updateView("home");
          }}
        >
          {" "}
          Home{" "}
        </button>{" "}
        <button
          onClick={(e) => {
            updateView("profile");
          }}
        >
          {" "}
          Profile
        </button>{" "}
      </div>

      <div className="main-view"> {renderView()} </div>
    </div>
  );
}

export default App;
