import Tooltip from "@mui/material/Tooltip";
import React from "react";
import { useState } from "react";
// import ReactTooltip from "react-tooltip";
import { ReactComponent as CopyButton } from "./copy-icon.svg";

const textCopy = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    alert("복사 실패!");
  }
};

function CardImage(props) {
  const isImageURL = props.image;
  const [isClicked, setIsClicked] = useState(false);

  const handleOnClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 1000);
    textCopy(props.text);
  };
  if (isImageURL) {
    return (
      <div className="styleImage" style={{ position: "relative" }}>
        <img
          style={{ width: props.width + "px", marginTop: "-8%" }}
          src={props.image}
          alt="image undefined"
        />
        <div className="styleIcon">
          <Tooltip title={isClicked ? "Copied!" : "Copy"}>
            <CopyButton
              data-tip
              data-for="registerTip"
              onClick={handleOnClick}
            />
          </Tooltip>
        </div>
      </div>
    );
  }
  return null;
}

export default class Card extends React.Component {
  render() {
    return (
      <div style={{ width: this.props.width + "px" }}>
        <div className="styleCard">
          <CardImage
            image={this.props.image}
            width={this.props.width}
            text={this.props.text}
          />
        </div>
      </div>
    );
  }
}

Card.defaultProps = {
  width: 350,
};
