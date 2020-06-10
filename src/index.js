import React from "react";
import ReactDom from "react-dom";

const image = 'https://picsum.photos/200'

ReactDom.render(
<div>
  <img alt='nature' src={image+'?grayscale'}/>
  </div>, document.getElementById('root'));