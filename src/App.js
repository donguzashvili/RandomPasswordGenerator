import React from "react";
import "./App.css";
import MainComponent from "./Components/MainComponent";
import RainEffect from "./Components/RainAnimation";

function App() {
  return (
    <React.Fragment>
      <MainComponent />
      <RainEffect />
    </React.Fragment>
  );
}

export default App;
