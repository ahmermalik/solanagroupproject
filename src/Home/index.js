import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import nfts from "../data";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./home.scss";

function Home(props) {
  const { nft } = props;

  const [inputText, setInputText] = useState("");
  const [availableNFTs, setAvailableNFTs] = useState({});
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
    searchMarket(nfts, inputText);
  };

  function searchMarket(object, value) {
    // define a recursive function to search an object
    const search = (obj) => {
      // loop through each key in the object
      for (let key in obj) {
        console.log("here", key);
        // if the value of the key is equal to the value we're searching for, return true
        if (obj[key] === value) {
          return true;
        }
        // if the value of the key is an object, recursively call the function on that object
        if (typeof obj[key] === "object") {
          return search(obj[key]);
        }
      }
      return false;
    };
    // call the recursive function on the object
    return search(object);
  }

  return (
    <div className="home-page">
      <div className="home-heading"> Explore, collect, and sell NFTs</div>
      <TextField
        id="outlined-basic"
        onChange={inputHandler}
        variant="outlined"
        fullWidth
        label="Search"
      />
<div className="nft-image">
      {nfts.map((nft) => {
        return (
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader

              title={nft.name}
              subheader={`'Floor Price:${nft.floor_price} SOL`}
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
          </Card>
        );
      })}
      </div>
    </div>
  );
}

export default Home;
