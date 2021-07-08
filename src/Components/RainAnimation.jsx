import React from "react";
import "./RainAnimation.css";
import RainSound from "../assets/audio/sound.mp3";

export default function RainEffect() {
  return (
    <div>
      <div className="rain"></div>
      <audio controls>
        <source src={RainSound} type="audio/mpeg" />
      </audio>
    </div>
  );
}
