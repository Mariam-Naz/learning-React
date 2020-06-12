import React from "react";
import ReactDOM from "react-dom";
import * as operation from "./calculator";

//Import the add, multiply, subtract and divide functions
//from the calculator.js file.
//If successful, your website should look the same as the Final.png

ReactDOM.render(
  <ul>
    <li>{operation.default(1, 2)}</li>
    <li>{operation.multiply(2, 3)}</li>
    <li>{operation.subtract(7, 2)}</li>
    <li>{operation.divide(5, 2)}</li>
  </ul>,
  document.getElementById("root")
);
