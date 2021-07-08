import React from "react";
import FileCopyIcon from "@material-ui/icons/FileCopy";

export default class MainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "Generate it",
    };
  }

  generatePassword = (e) => {
    e.preventDefault();

    const lowerCaseBox = document.getElementById("LowerCase");
    const upperCaseBox = document.getElementById("UpperCase");
    const numberBox = document.getElementById("numbers");
    const symbolBox = document.getElementById("symbol");

    const lowerCase = "abcdefghijklmnopqrstwyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTWYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*_-+=";

    //checking which length is chosen
    const passLength = document.querySelector(
      'input[name="Units"]:checked'
    ).value;
    let mainString = "";

    //checking if lowerCase is checked
    let checkedData = lowerCaseBox.checked
      ? (mainString += lowerCase)
      : mainString;

    //checking if upperCase is checked
    checkedData = upperCaseBox.checked ? (mainString += upperCase) : mainString;

    //checking if symbols are checked
    checkedData = symbolBox.checked ? (mainString += symbols) : mainString;

    //checking if numbers are checked
    checkedData = numberBox.checked ? (mainString += numbers) : mainString;

    //pass length of password and checked data to randomizer
    const generate = (length, string) => {
      let generatedPassword = "";

      for (let i = 0; i < length; i++) {
        generatedPassword += string.charAt(
          Math.floor(Math.random() * string.length)
        );
      }
      this.setState({ password: generatedPassword });
    };
    generate(passLength, checkedData);
  };

  render() {
    return (
      <div className="wrapper">
        <div className="header">
          <h1>Generate Password</h1>
        </div>

        <div className="passwordGeneratorContainer">
          <div className="generatedPassword">
            <p id="password">{this.state.password}</p>

            <FileCopyIcon
              className="copyIcon"
              onClick={() => navigator.clipboard.writeText(this.state.password)}
            />

            <span className="hiddenText">Copy</span>
          </div>

          <div className="options">
            <h2>Password Length</h2>

            <form onSubmit={this.generatePassword}>
              <div className="length">
                <div className="lengthWrapper">
                  <label htmlFor="8">8 Units</label>
                  <input
                    type="radio"
                    name="Units"
                    value="8"
                    id="8"
                    defaultChecked
                  />
                </div>

                <div className="lengthWrapper">
                  <label htmlFor="10">10 Units</label>
                  <input type="radio" name="Units" value="10" id="10" />
                </div>

                <div className="lengthWrapper">
                  <label htmlFor="12">12 Units</label>
                  <input type="radio" name="Units" value="12" id="12" />
                </div>

                <div className="lengthWrapper">
                  <label htmlFor="14">14 Units</label>
                  <input type="radio" name="Units" value="14" id="14" />
                </div>
              </div>

              <div className="checkBoxs">
                <div className="lengthWrapper">
                  <label htmlFor="UpperCase">UpperCase</label>
                  <input type="checkbox" value="UpperCase" id="UpperCase" />
                </div>

                <div className="lengthWrapper">
                  <label htmlFor="LowerCase">LowerCase</label>
                  <input type="checkbox" value="LowerCase" id="LowerCase" />
                </div>

                <div className="lengthWrapper">
                  <label htmlFor="Symbol">Symbol</label>
                  <input type="checkbox" value="Symbol" id="symbol" />
                </div>

                <div className="lengthWrapper">
                  <label htmlFor="Numbers">Numbers</label>
                  <input type="checkbox" value="Numbers" id="numbers" />
                </div>
              </div>

              <div className="btnContainer">
                <button>Generate</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
