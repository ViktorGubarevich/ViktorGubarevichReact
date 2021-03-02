import React from "react";
import Counter from "./Counter";
import Plus from "./Plus";
import Update from "./Update";
import Minus from "./Minus";
import "./App.scss";
import plus from "../images/plus.png";
import update from "../images/update.png";
import minus from "../images/minus.png";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.plus = plus;
    this.update = update;
    this.minus = minus;
    this.onPlusClick = this.clickPlus;
    this.onUpdateClick = this.clickUpdate;
    this.onMinusClick = this.clickMinus;
  }

  clickPlus = () => {
    this.setState((state) => ({ counter: state.counter + 1 }));
  };

  clickUpdate = () => {
    this.setState({ counter: 0 });
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
            <Plus onPlusClick={this.onPlusClick} plus={this.plus} />
            <Update onUpdateClick={this.onUpdateClick} update={this.update} />
            <Minus onMinusClick={this.onMinusClick} minus={this.minus} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
