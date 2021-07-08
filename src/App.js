import React from "react";
import "./App.css";
import MainComponent from "./Components/MainComponent";
import RainEffect from "./Components/RainAnimation";
import MovingMan from "./Components/MovingMan";

function App() {
  return (
    <React.Fragment>
      <MainComponent />
      <RainEffect />
      <MovingMan />
    </React.Fragment>
  );
}

export default App;
