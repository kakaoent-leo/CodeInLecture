import { useEffect, useState, useRef } from "react";
import Button from "@mui/material/Button";
import videojs, { VideoJsPlayer, VideoJsPlayerOptions } from "video.js";

import { Grid } from "@mui/material";
import Card from "./Card.js";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import imgFile from "./1.jpg";

function App() {
  const [codeImages, setCodeImages] = useState([]);
  console.log(codeImages);
  const [videoSrc, setVideoSrc] = useState("");
  const [timeStamp, setTimeStamp] = useState(0);

  const handleFileInput = () => {
    const input = document.getElementById("fileInput");
    const file = input.files[0];
    setVideoSrc(URL.createObjectURL(file));
    const fileName = file.name.split(".")[0];
    const total = require("./data/init.json").total;

    var codeImagesArr = [];
    for (let i = 0; i < total; i++) {
      const jsonName = `${fileName}_${i}.json`;
      const imageName = `${fileName}_${i}.png`;
      codeImagesArr.push({
        data: require(`./data/${jsonName}`),
        image: require(`./data/${imageName}`),
      });
    }
    console.log(codeImagesArr);
    setCodeImages(
      codeImagesArr.map((item, idx) => {
        return {
          image: item.image,
          timeStamp: item.data.timeStamp,
          code: item.data.codes,
          isError: item.data.isError,
        };
      })
    );
  };
  const handlePlay = () => {
    const video = document.getElementById("video");
    setInterval(() => {
      setTimeStamp(video.currentTime);
    }, 100);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={9}>
          <video
            onPlay={handlePlay}
            id="video"
            name="video"
            style={{ width: "100%", height: "100%" }}
            type="video/mp4"
            controls={true}
            autoPlay={true}
            src={videoSrc}
          ></video>
          <input type="file" id="fileInput" onInput={handleFileInput}></input>
        </Grid>
        <Grid item xs={3}>
          {codeImages
            .filter((item) => item.timeStamp < timeStamp)
            .map((item) => {
              console.log(item);
              return <Card image={item.image} text="code" />;
            })}
        </Grid>
      </Grid>
    </>
  );
}

export default App;
