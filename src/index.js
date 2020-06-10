import React from "react";
import ReactDom from "react-dom";

const image = 'https://picsum.photos/200'

const imageCustomize = {
    border: '2px solid black', // values in string
    boxShadow: ' 3px 3px 5px 6px #ccc'
}

ReactDom.render(
<div>
  <img style={imageCustomize} // style={{object}} object contain css property
  alt='nature' src={image+'?grayscale'}/>
  </div>, document.getElementById('root'));