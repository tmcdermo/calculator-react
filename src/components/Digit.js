import React from "react";

export default class Digit extends React.Component {
  handleClick = () => {
    this.props.input(this.props.content);
  };

  render() {
    const specialClass =
      this.props.content === "0"
        ? "zero"
        : this.props.content === "C"
        ? "clearbtn"
        : "";

    return (
      <div>
        <button
          type="button"
          className={`btn m-1 ${specialClass}`}
          onClick={this.handleClick}
        >
          {this.props.content}
        </button>
      </div>
    );
  }
}
