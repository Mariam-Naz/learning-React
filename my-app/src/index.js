import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Avatar from "./components/Avatar";
import contacts from "./contact"

function createCard(contact){
  return <App name = {contact.name}  imgURL = {contact.imgURL} contact = {contact.contact} email = {contact.email} />
}

ReactDOM.render(
  <div>
   <h1 className="heading">My Contacts</h1>
   <Avatar imgURL='https://media.gettyimages.com/photos/drone-photo-of-lahore-city-pakistan-picture-id806900368?s=612x612'/>
    {contacts.map(createCard)}
  </div>
  , document.getElementById("root"));

//1. Apply CSS styles to App.jsx component
//to match the appearance on the completed app:
//https://c6fkx.csb.app/
//2. Extract the contact card as a reusable Card component.
//3. Use props to render the default Beyonce contact card
//so the Card component can be reused for other contacts.
//4. Import the contacts.js file to create card components.
