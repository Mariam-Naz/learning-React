import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });
  function showContact(event){
    const{value, name} = event.target;
    setContact(preValue => {
      if(name === 'fName'){
        return{
          fName: value,
          lName: preValue.lName,
          email: preValue.email
        }
      } else if(name === 'lName'){
        return{
          fName: preValue.fName,
          lName: value,
          email: preValue.email
        }
      } else if(name === 'email'){
        return{
          fName: preValue.fName,
          lName: preValue.lName,
          email: value
        }
      } 
    })

  }
  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input onChange={showContact} name="fName" placeholder="First Name" />
        <input onChange={showContact} name="lName" placeholder="Last Name" />
        <input onChange={showContact} name="email" placeholder="Email" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
