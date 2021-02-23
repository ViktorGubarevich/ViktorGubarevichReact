import React from "react";
import './App.scss';
import plus from "../images/plus.png";
import minus from "../images/minus.png";
import update from "../images/update.png";

function App() {
  return ( < div className = 'main' >
    <
    div className = 'app' >
    <
    div className = 'count' > 13 < /div> <
    div className = 'buttons' >
    <
    div className = 'btn' > < button className = 'button-plus' > < img className = "img-plus"
    src = {
      plus
    }
    alt = "minus" / > < /button></div >
    <
    div className = 'btn' > < button className = 'button-update' > < img className = "img-update"
    src = {
      update
    }
    alt = "minus" / > < /button> < /
    div > <
    div className = 'btn' > < button className = 'button-minus' > < img className = "img-minus"
    src = {
      minus
    }
    alt = "minus" / > < /button> < /
    div > <
    /div> < /
    div > <
    /div>);
  }

  export default App;