import * as React from "react";
import Button from "@mui/material/Button";

function App() {
  return (
    <video
      style={{ width: "100%", height: "100%" }}
      type="video/mp4"
      controls={true}
      autoPlay={true}
      src="https://storage.googleapis.com/ent-vodka/.chunk/%EC%82%AC%EB%82%B4%EB%A7%9E%EC%84%A0_750.mp4"
    ></video>
  );
}

export default App;
