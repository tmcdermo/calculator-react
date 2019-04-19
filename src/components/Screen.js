import React from "react";

export default class Screen extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="screen m-4 rounded d-flex justify-content-end align-items-center pr-2">
          {this.props.output
            // .join("")
            .toString()
            .substr(-7)}
        </div>
      </div>
    );
  }
}
