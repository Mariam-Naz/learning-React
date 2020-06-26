import React from "react";
import Emoji from "./Emoji";
import emojipedias from "../emojipedia.js"

function creatEmoji(emojipedia){
  return <Emoji
    key = {emojipedia.id}
    emoji = {emojipedia.emoji}
    name = {emojipedia.name}
    meaning = {(emojipedia.meaning).substr(0,100)}
  />
}

function App(props) {
  return (
    <div>
    <h1>
        <span>emojipedia</span>
  </h1> 
  <dl className="dictionary">
     {emojipedias.map(creatEmoji)}
  </dl>
    </div>
  );
}

export default App;
