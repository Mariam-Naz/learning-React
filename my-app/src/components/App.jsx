import React, { useState } from "react";


function App() {
  const [headingText , setHeadingText] = useState('Hello')
  const [isMouseOver, setisMouseOver] = useState(false);
  function handleClick(){
    setHeadingText("Submit");
}
  function changeBackground(){
    setisMouseOver(true);
  }
  function noChangeBackground(){
    setisMouseOver(false);
  }
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button style = {{backgroundColor : isMouseOver ? 'black' : 'white'}}
      onClick = {handleClick} 
      onMouseOver ={changeBackground} onMouseOut = {noChangeBackground} >Submit</button>
    </div>
  );
}

export default App;