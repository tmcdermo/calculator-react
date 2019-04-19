import React from "react";
import Operator from "../components/Operator";

export default class OperatorPad extends React.Component {
  render() {
    return (
      <div>
        <Operator input={this.props.input} content="/" className="row" />
        <Operator input={this.props.input} content="*" className="row" />
        <Operator input={this.props.input} content="-" className="row" />
        <Operator input={this.props.input} content="+" className="row" />
        <Operator input={this.props.input} content="=" className="row" />
      </div>
    );
  }
}
