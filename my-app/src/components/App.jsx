import React, {useState} from "react";

function App() {
  let [count,setCount] = useState(0);

  function increase(){
    setCount(count + 1);
  }
  function decrease(){
    setCount(count - 1);
  }
  function reset(){
    setCount(count = 0)
  }
  return <div className="container">
  <h1>{count}</h1>
  <button onClick = {increase}>+</button>
  <button onClick = {decrease}>-</button>
  <button onClick = {reset}>0</button>
</div>
}

export default App;
