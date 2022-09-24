import { useState } from "react";

import { Grid } from "@mui/material";
import Card from "./Card.js";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";

function onClickUpload() {
  let myInput = document.getElementById("fileInput");
  myInput.click();
}

function App() {
  const [codeImages, setCodeImages] = useState([]);

  const [videoSrc, setVideoSrc] = useState("");
  const [timeStamp, setTimeStamp] = useState(0);
  console.log("codeImages", codeImages);
  const handleFileInput = () => {
    const input = document.getElementById("fileInput");
    const file = input.files[0];
    setVideoSrc(URL.createObjectURL(file));
    const fileName = file.name.split(".")[0];
    console.log(fileName);
    const total = require(`./data/${fileName}_frame_init.json`).total;
    console.log(total);

    var codeImagesArr = [];
    for (let i = 0; i < total; i++) {
      const jsonName = `${fileName}_frame_${i}.json`;
      const imageName = `${fileName}_frame_${i}.jpg`;

      codeImagesArr.push({
        data: require(`./data/${jsonName}`),
        image: require(`./data/${imageName}`),
      });
    }
    setCodeImages(
      codeImagesArr.map((item) => {
        return {
          timeStamp: item.data.timeStamp + 2,
          code: item.data.code,
          image: item.image,
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
      <input type="file" id="fileInput" onInput={handleFileInput}></input>

      <Grid className="gridsContainer" container spacing={2}>
        <Grid item xs={9}>
          <video
            onPlay={handlePlay}
            className="video"
            id="video"
            name="video"
            style={{ width: "100%" }}
            type="video/mp4"
            controls={true}
            autoPlay={true}
            src={videoSrc}
          ></video>
          <button className="button-9" onClick={onClickUpload}>
            File
          </button>
        </Grid>
        <Grid
          className="cardContainer"
          item
          xs={3}
          style={{ overflow: "scroll", height: "100vh" }}
        >
          {codeImages
            .filter((item) => item.timeStamp < timeStamp)
            .map((item) => (
              <Card image={item.image} text={item.code} />
            ))}
        </Grid>
      </Grid>
    </>
  );
}

export default App;
