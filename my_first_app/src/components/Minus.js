import React from "react";

export default class Minus extends React.Component {
  render() {
    return (
      <div className="btn">
        <button className="button-minus" onClick={this.props.onMinusClick}>
          <img className="img-minus" src={this.props.minus} alt="minus" />
        </button>
      </div>
    );
  }
}
