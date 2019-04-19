import React from "react";

export default class Operator extends React.Component {
  handleClick = () => {
    this.props.input(this.props.content);
  };

  render() {
    return (
      <div>
        <button type="button" className="btn m-1" onClick={this.handleClick}>
          {this.props.content}
        </button>
      </div>
    );
  }
}
