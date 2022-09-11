import React, { useState } from "react";
import { Alert, Card } from "@mui/material";
import Login from "../Login/login";
import Buttons from "../../Components/Buttons";
import './register.css'
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 

  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);
  


  function handleFormSubmit(e) {
    e.preventDefault();

    if ( !email || !password ) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("Email", JSON.stringify(email));
      localStorage.setItem(
        "Password",
        JSON.stringify(password)
      );
      console.log("Saved in Local Storage");

      setLogin(!login);
    }
  }

  function handleClick() {
    setLogin(!login);
  }

 
  

  return (
    <>
 
        <div className="Form">
        <div className="header"> 
        <img className="logo"  src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/694px-Star_Wars_Logo.svg.png'/>
        <Buttons/>
        </div>
          {" "}
          {login ? (
            <Card className='cardlogin'>
                <form onSubmit={handleFormSubmit}>
              <h3 className="title">Cadastrar</h3>
               <div className="form-group">
                <label className="label">Email</label>
                <input
                  type="email"
                  className="Input"
                  placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="label">Password</label>
                <input
                  type="password"
                  className="Input"
                  placeholder="Enter password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>

              
              <button type="submit" className="btnLogin ">
                Register
              </button>
              <p onClick={handleClick} className="logina">
                Already registered{" "}log in?
                
              </p>
              {flag && (
                <Alert severity="error">
                  I got it you are in hurry! But every Field is important!
                </Alert>
              )}
            </form>
            </Card>
          
          ) : (
            <Login />
          )}
        </div>
    
    </>
  );
}

export default Register;
