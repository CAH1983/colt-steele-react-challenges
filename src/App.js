import React, { Component } from "react";
import BoxWrapper from "./Components/BoxWrapper";
import CoinWrapper from "./Components/CoinWrapper";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CoinWrapper />

        <BoxWrapper />
      </div>
    );
  }
}

export default App;
