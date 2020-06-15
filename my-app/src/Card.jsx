import React from "react";

function Card(props){
  return <div>
      <h1>Contact</h1>
      <h2>{props.name}</h2>
      <img src={props.image} 
          alt='image' />
      <p>{props.tel}</p>
    </div>
}

export default Card;
