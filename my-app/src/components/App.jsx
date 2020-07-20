import React , {useState} from "react";

function App() {
  const [fullName , setFullName] = useState({
    fName : "",
    lName : ""
  });

  function handleChange(event){
    const{value , name} = event.target;

    setFullName(preValue =>{
      if(name === "fName"){
        return{
          fName: value,
          lname: preValue.lName
      }
      }else if(name === "lName"){
        return{
          fName: preValue.fName,
          lName: value
      }
      }
    });
  }
  return (
    <div className="container">
      <h1>Hello {fullName.fName} {fullName.lName}</h1>
      <form>
        <input onChange = {handleChange}  name="fName" placeholder="First Name" value={fullName.fName} />
        <input onChange = {handleChange}  name="lName" placeholder="Last Name" value={fullName.lName}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
