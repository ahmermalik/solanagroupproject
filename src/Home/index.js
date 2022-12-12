import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import nfts from "../data";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import { CardActions } from '@mui/material';
import { CardActionArea } from '@mui/material';

import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./home.scss";

function Home(props) {
  const { nft } = props;

  const [inputText, setInputText] = useState({input: ""});
  const [availableNFTs, setAvailableNFTs] = useState(nfts);

  function searchMarket(nfts, inputText) {
    let availableMarket = [];

    for (let items in nfts) {
      const nftName = nfts[items].name;

      if (nftName.toLowerCase().includes(inputText.toLowerCase())) {
        availableMarket.push(nfts[items]);
      }
    }
    setAvailableNFTs(availableMarket);
  }

  const viewNFT = (nft)=>{
    // pop modal or go ahead and open phantom/metamask and ask to purchase the NFT
    console.log(nft);

    
  }

  return (
    <div className="home-page">
      <div className="home-heading"> Explore, collect, and sell NFTs</div>
      <TextField
        id="outlined-basic"
        onChange={(event)=> {
          setInputText(
            (inputText) => ({...inputText, input: event.target.value.toLowerCase()})
          );
          searchMarket(nfts, event.target.value.toLowerCase());
        }}
        variant="outlined"
        fullWidth
        label="Search"
      />
      <div className="nft-container">
        {availableNFTs.map((nft) => {
          return (
            <span className="nft-image">
              <Card sx={{ maxWidth: 345 }} onClick={() => viewNFT(nft)} >
              <CardActionArea>
                <CardHeader
                  title={nft.name}
                  subheader={`'Floor Price: ${nft.floor_price} SOL`}
                />
                <CardMedia
                  component="img"
                  height="194"
                  image={nft.image}
                  alt={nft.name}
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {nft.description}
                  </Typography>
                </CardContent>
                </CardActionArea>
              </Card>
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
