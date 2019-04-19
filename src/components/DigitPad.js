import React from "react";
import Digit from "../components/Digit";

export default class DigitPad extends React.Component {
  render() {
    return (
      <div className="">
        <div className="row">
          <Digit input={this.props.input} content="C" className="" />
        </div>
        <div className="row">
          <Digit input={this.props.input} content="7" className="" />
          <Digit input={this.props.input} content="8" className="" />
          <Digit input={this.props.input} content="9" className="" />
        </div>
        <div className="row">
          <Digit input={this.props.input} content="4" className="" />
          <Digit input={this.props.input} content="5" className="" />
          <Digit input={this.props.input} content="6" className="" />
        </div>
        <div className="row">
          <Digit input={this.props.input} content="1" className="" />
          <Digit input={this.props.input} content="2" className="" />
          <Digit input={this.props.input} content="3" className="" />
        </div>
        <div className="row">
          <Digit input={this.props.input} content="0" className="" />
          <Digit input={this.props.input} content="." className="" />
        </div>
      </div>
    );
  }
}
