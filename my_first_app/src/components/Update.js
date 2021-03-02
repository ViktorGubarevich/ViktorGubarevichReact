import React from "react";

export default class Update extends React.Component {
  render() {
    return (
      <div className="btn">
        <button className="button-update" onClick={this.props.onUpdateClick}>
          <img className="img-update" src={this.props.update} alt="update" />
        </button>
      </div>
    );
  }
}
