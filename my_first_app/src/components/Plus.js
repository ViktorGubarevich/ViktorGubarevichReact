import React from "react";

export default class Plus extends React.Component {
  render() {
    return (
      <div className="btn">
        <button className="button-plus" onClick={this.props.onPlusClick}>
          <img className="img-plus" src={this.props.plus} alt="plus" />
        </button>
      </div>
    );
  }
}
