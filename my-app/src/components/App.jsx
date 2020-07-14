import React, {useState}from "react";

function App() {
const [name, setName] = useState("");
const [showname , setShowname] = useState("");
function handleChange(event){
  setName(event.target.value);
}

function displayName(){
  setShowname(name);
}

  return (
    <div className="container">
      <h1>Hello {showname}</h1>
      <input onChange = {handleChange} 
      type="text" 
      placeholder="What's your name?" />
      <button onClick = {displayName}>Submit</button>
    </div>
  );
}

export default App;
