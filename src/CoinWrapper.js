import React, { Component } from "react";
import Coin from "./Coin";
import smiley_face from "./Images/smiley_face.png";
import mushroom_face from "./Images/mushroom.png";

class CoinWrapper extends Component {
  static defaultProps = {
    images: [smiley_face, mushroom_face],
  };

  constructor(props) {
    super(props);
    this.state = {
      img: smiley_face,
      numFlips: 0,
      smileyCount: 0,
      mushroomCount: 0,
    };
    this.flipCoin = this.flipCoin.bind(this);
  }

  incrementFlips(prevState) {
    return { numFlips: prevState.numFlips + 1 };
  }

  incrementSmileys(prevState) {
    return { smileyCount: prevState.smileyCount + 1 };
  }

  incrementMushrooms(prevState) {
    return { mushroomCount: prevState.mushroomCount + 1 };
  }

  flipCoin() {
    const randomImg =
      this.props.images[Math.floor(Math.random() * this.props.images.length)];

    this.setState({
      img: randomImg,
    });

    this.setState(this.incrementFlips);

    if (randomImg === smiley_face) {
      this.setState(this.incrementSmileys);
    } else {
      this.setState(this.incrementMushrooms);
    }
  }

  render() {
    const { img, numFlips, smileyCount, mushroomCount } = this.state;
    return (
      <div className="CoinWrapper center-container">
        <Coin imgURL={img} />

        <button className="CoinWrapper-btn" onClick={this.flipCoin}>
          {" "}
          Flip the coin{" "}
        </button>

        <p> Number of flips : {numFlips} </p>
        <p> Smiley face : {smileyCount} </p>
        <p> Mushroom(s) eaten : {mushroomCount}</p>
      </div>
    );
  }
}

export default CoinWrapper;
