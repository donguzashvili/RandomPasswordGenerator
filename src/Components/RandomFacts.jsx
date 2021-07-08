import React from "react";
import "./RandomFacts.css";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";

export default class RandomFacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "click button to generate it",
      facts: 0,
    };
  }
  //get data from api and pass it to state.text
  facts = () => {
    fetch("https://uselessfacts.jsph.pl/random.json?language=en")
      .then((res) => res.json())
      .then((data) => {
        if (data.language === "en") {
          this.setState({ text: data.text });
        } else {
          this.setState({ text: "click one more time" });
        }
      });
  };
  //toggle container
  toggle = () => {
    let container = document.getElementById("RandomFactsWrapper");
    let arrow = document.getElementById("arrow");

    //check if container is closed
    if (this.state.facts === 0) {
      container.style.left = "0vw";
      arrow.style.transform = "rotate(180deg)";
      this.setState({ facts: 1 });
    } else {
      container.style.left = "-90vw";
      arrow.style.transform = "rotate(0deg)";
      this.setState({ facts: 0 });
    }
  };
  render() {
    return (
      <div id="RandomFactsWrapper">
        <div className="randomFactsContainer">
          <h3>Useless Random Facts</h3>
          <hr />
          <p>
            <b>Congrats you're about to waste your time</b>
          </p>
          <p className="factArea">{this.state.text}</p>
          <button onClick={this.facts}>Generate Random Facts</button>
        </div>
        <div className="openFacts">
          <p>Click Arrow!</p>
          <DoubleArrowIcon id="arrow" onClick={this.toggle} />
        </div>
      </div>
    );
  }
}
