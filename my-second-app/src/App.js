import React from "react";
import "./App.scss";
import { Fieldset } from "./Fieldset";

// const rate = 2.64;

// function App() {

//   const [onChangeInUSD, setChangeInUSD] = useState(0);
//   const [onChangeInBYN, setChangeInBYN] = useState(0);

//   function setChangeInUSD = (value) => {
//     onChangeInUSD({ currency: "USD", value });
//   };
//   function setChangeInBYN = (value) => {
//     onChangeInBYN({ currency: "BYN", value });
//   };

//   toBYN = (USD) => {
//     return USD * rate;
//   };

//   toUSD = (BYN) => {
//     return BYN / rate;
//   };

//   convertCurrency = (value, convertor) => {
//     let converted = convertor(value);
//     let rounded = Math.round(converted * 100) / 100;
//     return rounded;
//   };

//   return (

//     const value = {value};
//     const currency = {currency};
//     const USD =
//       currency === "BYN" ? this.convertCurrency(value, toUSD) : value;
//     const BYN =
//       currency === "USD" ? this.convertCurrency(value, toBYN) : value;

//     <form className="app">
//       <h2>Live currency converter</h2>
//       <Fieldset
//         legend="$, USD"
//         currency="USD"
//         value={USD}
//         onChange={setChangeInUSD}
//       />
//       <Fieldset
//         currency="BYN"
//         legend="BYN"
//         value={BYN}
//         onChange={setChangeInBYN}
//       />
//     </form>
//   );
// }

const rate = 2.64;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  toBYN = (USD) => {
    return USD * rate;
  };

  toUSD = (BYN) => {
    return BYN / rate;
  };

  convertCurrency = (value, convertor) => {
    let converted = convertor(value);
    let rounded = Math.round(converted * 100) / 100;
    return rounded;
  };

  onChangeInUSD = (value) => {
    this.setState({ currency: "USD", value });
  };
  onChangeInBYN = (value) => {
    this.setState({ currency: "BYN", value });
  };

  render() {
    const value = this.state.value;
    const currency = this.state.currency;
    const USD =
      currency === "BYN" ? this.convertCurrency(value, this.toUSD) : value;
    const BYN =
      currency === "USD" ? this.convertCurrency(value, this.toBYN) : value;

    return (
      <form className="app">
        <h2>Live currency converter</h2>
        <Fieldset
          legend="$, USD"
          currency="USD"
          value={USD}
          onChange={this.onChangeInUSD}
        />
        <Fieldset
          currency="BYN"
          legend="BYN"
          value={BYN}
          onChange={this.onChangeInBYN}
        />
      </form>
    );
  }
}

export default App;
