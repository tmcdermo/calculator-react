import React from "react";
import Screen from "./components/Screen";
import KeyPad from "./components/KeyPad";

import "./styles.css";
import CardSubtitle from "reactstrap/lib/CardSubtitle";

export default class Calculator extends React.Component {
  state = {
    operator: "",
    currNum: 0,
    prevNum: 0,
    displayCurrNum: true
  };

  performMath = () => {
    let total = 0.0;
    switch (this.state.operator) {
      case "/":
        total = this.state.prevNum / this.state.currNum;
        this.setState(
          {
            prevNum: total
          },
          () => {
            console.log("Result: " + this.state.currNum);
          }
        );
        break;
      case "*":
        total = this.state.prevNum * this.state.currNum;
        this.setState(
          {
            prevNum: total
          },
          () => {
            console.log("Result: " + this.state.currNum);
          }
        );
        break;
      case "-":
        total = this.state.prevNum - this.state.currNum;
        this.setState(
          {
            prevNum: total
          },
          () => {
            console.log("Result: " + this.state.currNum);
          }
        );
        break;
      case "+":
        total = Number(this.state.prevNum) + Number(this.state.currNum);
        this.setState(
          {
            prevNum: total
          },
          () => {
            console.log("Result: " + this.state.currNum);
          }
        );
        break;
      case "=":
        break;
      default:
        break;
    }
  };

  handleInput = newInput => {
    switch (true) {
      case newInput >= 0 && newInput <= 9:
        this.setState(
          state => {
            state.displayCurrNum = true;
            state.currNum != "0"
              ? (state.currNum = state.currNum + "" + newInput)
              : (state.currNum = newInput);
          },
          () => {
            console.log("Operation: " + newInput);
            console.log(this.state);
          }
        );
        break;
      case newInput === ".":
        if (!this.state.currNum.includes(".")) {
          this.setState(
            state => {
              state.displayCurrNum = true;
              state.currNum = state.currNum + "" + newInput;
            },
            () => {
              console.log("Operation: " + newInput);
              console.log(this.state);
            }
          );
        }
        break;
      case newInput === "C":
        this.setState(
          state => {
            state.displayCurrNum = true;
            state.currNum = 0;
            state.prevNum = 0;
            state.operator = "";
          },
          () => {
            console.log("Operation: " + newInput);
            console.log(this.state);
          }
        );
        break;
      case newInput === "*":
      case newInput === "-":
      case newInput === "+":
      case newInput === "/":
        this.setState(
          state => {
            state.displayCurrNum = false;
            if (state.operator) {
              this.performMath();
            }
            state.prevNum = state.currNum;
            state.currNum = 0;
            state.operator = newInput;
          },
          () => {
            console.log("Operation: " + newInput);
            console.log(this.state);
          }
        );
        break;

      case newInput === "=":
        this.setState(
          state => {
            state.displayCurrNum = false;
            if (state.operator) {
              this.performMath();
            }
            state.prevNum = state.currNum;
          },
          () => {
            console.log("Operation: " + newInput);
            console.log(this.state);
          }
        );
        break;
      default:
        console.log("Invalid Input");
    }

    this.forceUpdate();
  };

  render() {
    return (
      <div className="row calcWrapper">
        <div className="calculator m-auto rounded">
          <Screen
            output={
              this.state.displayCurrNum
                ? this.state.currNum
                : this.state.prevNum
            }
          />
          <KeyPad input={this.handleInput} />
        </div>
      </div>
    );
  }
}
