import React from "react";
import "./App.css";
import MainComponent from "./Components/MainComponent";
import RainEffect from "./Components/RainAnimation";
import MovingMan from "./Components/MovingMan";
import RandomFacts from "./Components/RandomFacts";

function App() {
  return (
    <React.Fragment>
      <MainComponent />
      <RandomFacts />
      <RainEffect />
      <MovingMan />
    </React.Fragment>
  );
}

export default App;
