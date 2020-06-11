import React from "react";
import ReactDom from "react-dom";


let time = new Date(2020,11,20);
let timeSet = time.getHours();

var colour = {
  color : ''
    }

if(timeSet >0 && timeSet<=12){
  var greetMsg = 'Good Morning';
  colour.color = 'red';
  
}
else if(timeSet >12 && timeSet<=18){
   greetMsg = 'Good Afternoon';
   colour.color = 'green';
}
else{
  greetMsg = 'Good Night'
  colour.color = 'blue';
}
ReactDom.render(
<div>
  <h1 className='heading' style={colour}> {greetMsg} </h1>
  </div>, document.getElementById('root'));