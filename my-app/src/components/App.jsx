import React from "react";
import Avatar from "./Avatar";
import Info from "./Info";

function App(props) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2 className='name'>{props.name}</h2>
          <Avatar imgURL={props.imgURL}/>
        </div>
        <div className="bottom">
       <Info contact={props.contact} email={props.email} />
        </div>
      </div>
    </div>
  );
}

export default App;
