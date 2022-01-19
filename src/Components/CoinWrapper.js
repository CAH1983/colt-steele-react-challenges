import React, { Component } from "react";
import Coin from "./Coin";
import smiley_face from "../Images/smiley_face.png";
import mushroom_face from "../Images/mushroom.png";

class CoinWrapper extends Component {
  static defaultProps = {
    images: [smiley_face, mushroom_face],
  };

  constructor(props) {
    super(props);
    this.state = {
      img: smiley_face,
      flipCount: 0,
      smileyCount: 0,
      mushroomCount: 0,
    };
    this.flipCoin = this.flipCoin.bind(this);
  }

  flipCoin() {
    const randomImg = this.props.images[Math.floor(Math.random() * this.props.images.length)];

    this.setState((currState) => {
      return {
        img: randomImg,
        flipCount: currState.flipCount + 1,
        smileyCount: currState.smileyCount + (randomImg === smiley_face ? 1 : 0),
        mushroomCount: currState.mushroomCount + (randomImg === mushroom_face ? 1 : 0),
      };
    });
  }

  render() {
    const { img, flipCount, smileyCount, mushroomCount } = this.state;
    return (
      <div className="CoinWrapper center-container">
        <Coin imgURL={img} />

        <button className="CoinWrapper-btn" onClick={this.flipCoin}>
          {" "}
          Flip the coin{" "}
        </button>

        <p> Number of flips : {flipCount} </p>
        <p> Smiley face : {smileyCount} </p>
        <p> Mushroom(s) eaten : {mushroomCount}</p>
      </div>
    );
  }
}

export default CoinWrapper;
