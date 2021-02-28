import React from "react";
import Counter from "./Counter";
import "./App.scss";
import plus from "../images/plus.png";
import minus from "../images/minus.png";
import update from "../images/update.png";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  clickPlus = () => {
    this.setState((state) => ({ counter: state.counter + 1 }));
  };

  clickUpdate = () => {
    this.setState((state) => ({ counter: (state.counter = 0) }));
  };

  clickMinus = () => {
    this.setState((state) => ({ counter: state.counter - 1 }));
  };

  render() {
    return (
      <div className="main">
        <div className="app">
          <Counter counter={this.state.counter} />
          <div className="buttons">
            <div className="btn">
              {" "}
              <button className="button-plus" onClick={this.clickPlus}>
                {" "}
                <img className="img-plus" src={plus} alt="plus" />{" "}
              </button>{" "}
            </div>{" "}
            <div className="btn">
              {" "}
              <button className="button-update" onClick={this.clickUpdate}>
                {" "}
                <img className="img-update" src={update} alt="update" />{" "}
              </button>{" "}
            </div>{" "}
            <div className="btn">
              {" "}
              <button className="button-minus" onClick={this.clickMinus}>
                {" "}
                <img className="img-minus" src={minus} alt="minus" />{" "}
              </button>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    );
  }
}

export default App;
