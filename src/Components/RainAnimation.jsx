import React from "react";
import "./RainAnimation.css";
import RainSound from "../assets/audio/sound.mp3";

export default function RainEffect() {
  //audio sound is too loud so made it lower
  window.onload = () => {
    let audio = document.getElementById("audio");
    audio.volume = 0.01;
  };
  return (
    <div>
      <div className="rain"></div>
      <audio id="audio" controls>
        <source src={RainSound} type="audio/mpeg" />
      </audio>
    </div>
  );
}
