import React, { Component } from "react";
import Box from "./Box";
import "./BoxWrapper.css";

class BoxWrapper extends Component {
  static defaultProps = {
    colorArray: [
      "#d3a9a9",
      "#915a5a",
      "#5a917c",
      "#868B8E",
      "#a822ff",
      "#e16f22",
      "#FFAEBC",
      "#A0E7E5",
      "#B4F8C8",
      "#FBE7C6",
      "#5885AF",
      "#faf92d",
      "#05E0E9",
      "#0000A3",
      "#BDC6D9",
    ],
  };
  render() {
    const boxes = this.props.colorArray.map((b) => <Box color={b} />);
    return (
      <div className="BoxWrapper">
        <div className="BoxContainer">{boxes}</div>
      </div>
    );
  }
}

export default BoxWrapper;
