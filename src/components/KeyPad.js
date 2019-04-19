import React from "react";
import DigitPad from "../components/DigitPad";
import OperatorPad from "../components/OperatorPad";

export default class KeyPad extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress = event => {
    console.log(event.key);
    switch (true) {
      case event.key <= 9 && event.key >= 0:
      case event.key === ".":
      case event.key === "/":
      case event.key === "-":
      case event.key === "*":
      case event.key === "+":
        this.props.input(event.key);
        break;
      case event.key === "Escape":
        this.props.input("C");
        break;
      case event.key === "Enter":
        this.props.input("=");
        break;
      default:
        break;
    }
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress, false);
  }

  render() {
    return (
      <div className="row">
        <div className="col-11 d-flex justify-content-around mx-auto mb-3">
          <DigitPad input={this.props.input} className="" />
          <OperatorPad input={this.props.input} className="operators" />
        </div>
      </div>
    );
  }
}
