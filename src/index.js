import React from "react";
import ReactDom from "react-dom";

const fName = 'Mariam';
const lName = 'Naz';
const age = Math.floor(Math.random()*10);

ReactDom.render(
<div>
  <h1> Assalam o Alaikum {fName +' '+ lName} </h1>
  <p>
    Your lucky number is {age}
  </p>
</div>, document.getElementById('root'));