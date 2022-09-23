import * as React from "react";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";

function App() {
  var a = 1;
  const json0 = {
    id: 0,
    isError: false,
    timeStamp: 0,
    codes: "if score >= 90",
  };
  const json1 = {
    id: 1,
    isError: false,
    timeStamp: 5,
    codes: 'if score >= 90:\nprint("A")',
  };
  const json2 = {
    id: 2,
    isError: false,
    timeStamp: 10,
    codes: 'if score >= 90:\nprint("A")\nprint("F")',
  };
  console.log(JSON.stringify(json0));
  console.log(JSON.stringify(json1));
  console.log(JSON.stringify(json2));
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={9}>
          <video
            style={{ width: "100%", height: "100%" }}
            type="video/mp4"
            controls={true}
            autoPlay={true}
            src="https://storage.googleapis.com/ent-vodka/.chunk/%EC%82%AC%EB%82%B4%EB%A7%9E%EC%84%A0_750.mp4"
          ></video>
        </Grid>
        <Grid item xs={3}>
          <div>asd</div>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
