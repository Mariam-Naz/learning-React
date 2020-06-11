import React from 'react';

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
   greetMsg = 'Good Afternoon'
   colour.color = 'green';
}
else{
  greetMsg = 'Good Night'
  colour.color = 'blue';
}
function Heading(){
  return <h1 style={colour}> {greetMsg}</h1>  
}

export default Heading;