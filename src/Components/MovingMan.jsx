import React from "react";
import "./MovingMan.css";

export default class MovingMan extends React.Component {
  render() {
    return (
      <div>
        <div className="WalkingMan">
          <div id="ManBody">
            <div className="body">
              <span id="Manhead"></span>
              <span className="Middlepart"></span>
              <span className="Lhand"></span>
              <span className="Rhand"></span>
            </div>
            <span className="LLeg"></span>
            <span className="RLeg"></span>
          </div>
        </div>
      </div>
    );
  }
}
