import React, { Component } from "react";
import "./Box.css";

class Box extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentColor: "",
    };
  }

  //   changeColor() {
  //     let randomColor = "";
  //   }
  render() {
    return (
      <div
        className="Box"
        style={{ backgroundColor: `${this.props.color}` }}
      ></div>
    );
  }
}

export default Box;
