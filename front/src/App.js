import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import Card from "./Card.js";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import imgFile from "./1.jpg";

function onClickUpload(){
  let myInput = document.getElementById("fileInput");
  myInput.click();
}

function App() {
  const [codeImages, setCodeImages] = useState([]);
  const [videoSrc, setVideoSrc] = useState("");

  useEffect(() => {
    var video = document.querySelector("video");
    video.addEventListener("progress", (e) => {
      console.log(e);
    });
  }, [videoSrc]);

  console.log(codeImages);
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
        image: `./data/${imageName}`,
      });
    }
    console.log(codeImagesArr);
    setCodeImages(
      codeImagesArr.map((item, idx) => {
        return {
          image: item.image,
          code: item.data.codes,
          isError: item.data.isError,
        };
      })
    );
  };

  return (
    <>
      <input type="file" id="fileInput" onInput={handleFileInput}></input>
      
      {/* <div>a</div>
      <div>a</div>
      <div>a</div>
      <div>a</div> */}
      <Grid className="gridsContainer" container spacing={2}>
        <Grid item xs={9}>
          <video className="video"
            id="video"
            name="video"
            style={{ width: "100%"}}
            type="video/mp4"
            controls={true}
            autoPlay={true}
            src={videoSrc}
          ></video>
          <button className="button-9" onClick={onClickUpload}>File</button>
        </Grid>
        <Grid className="cardContainer" item xs={3} style={{ overflow:"scroll", height:"100vh"}}>
          <Card image={imgFile} text="code" />
          <Card image={imgFile} text="code" />
          <Card image={imgFile} text="code" />
          <Card image={imgFile} text="code" />
          <Card image={imgFile} text="code" />
          <Card image={imgFile} text="code" />
          <Card image={imgFile} text="code" />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
