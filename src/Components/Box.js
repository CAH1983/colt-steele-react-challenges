import React, { Component } from "react";
import "./Box.css";

class Box extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentColor: this.props.color,
    };

    this.changeColor = this.changeColor.bind(this);
  }

  changeColor() {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    this.setState({
      currentColor: randomColor,
    });
  }

  render() {
    return (
      <div
        className="Box"
        style={{ backgroundColor: `${this.state.currentColor}` }}
        onClick={this.changeColor}
      ></div>
    );
  }
}

export default Box;
