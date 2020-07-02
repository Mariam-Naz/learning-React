import React, { useState } from "react";

function App() {  
  var set = new Date();
var [time,setTime] = useState(set.getHours() + ":" + set.getMinutes() + ":" + set.getSeconds());
function fetchTime(){
  setTime(time = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds());
  setInterval(fetchTime, 1000);
}
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={fetchTime}>Get Time</button>
    </div>
  );
}
export default App;
