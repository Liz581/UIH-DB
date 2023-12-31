// To run: cd frontend -> npm start

import React, { useState} from "react";
import { useNavigate } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import PickUserButton from "./components/PickUserButton";


function App() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [usernameError, setUsernameError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [user, setUser] = useState("patient")
  const navigate = useNavigate();

  const chooseUser = (user) =>{
    setUser(user)
  }

  const loginClick = () => {
    // Set initial error values to empty
    setUsernameError("");
    setPasswordError("");
    console.log(user);
    // Check if the user has entered both fields correctly
    if ("" === username) {
        setUsernameError("Please enter your email")
        return
    }

    if ("" === password) {
        setPasswordError("Please enter a password")
        return
    }

    // check if they are in the system using api call

    if (user === 'admin') {
      let path = '/pages/admin/OptionSelect';
      navigate(path, {replace: true});
    }

    // if (user === 'nurse') {
    //   navigate('/pages/nurse/OptionSelect');
    // }

    // if (user === 'patient') {
    //   navigate('/pages/patient/OptionSelect');
    // }

  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div className={"title"}>
            <div>Welcome! Please log in</div>
        </div>

        <input
          value={username}
          placeholder="Enter your username here"
          onChange={ev => setUsername(ev.target.value)}
          className={"inputBox"}
        />
        <label className="errorLabel">{usernameError}</label>

        <input
          value={password}
          placeholder="Enter your password here"
          onChange={ev => setPassword(ev.target.value)}
          className={"inputBox"}
          />
        <label className="errorLabel">{passwordError}</label>

        <div className={"subtitle"}>
            <div>Who are you? </div>
        </div>

        <PickUserButton user={user} chooseUser={chooseUser}/>

        <button onClick={loginClick} className={"loginButtonDefault"}>
            Login
        </button>

      </header>
    </div>
  );
}

export default App;
