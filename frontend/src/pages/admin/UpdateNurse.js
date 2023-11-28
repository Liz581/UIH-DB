import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './UpdateNurse.css';


function UpdateNurse() {
    const [employee_id, setEmployeeId] = useState();
    const [name, setName] = useState("");
    const [age, setAge] = useState();
    const [gender, setGender] = useState("");
    const [phone_number, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [blankError, setError] = useState("")
    // const navigate = useNavigate();


    const loginClick = () => {
        // Set initial error values to empty
        setError("")

        // Check if the user has entered both fields correctly
        if ("" === employee_id) {
            setError("Please fill this in")
            return
        }
        if ("" === name) {
            setError("Please fill this in")
            return
        }
        if ("" === age) {
            setError("Please fill this in")
            return
        }
        if ("" === gender) {
            setError("Please fill this in")
            return
        }
        if ("" === phone_number) {
            setError("Please fill this in")
            return
        }
        if ("" === address) {
            setError("Please fill this in")
            return
        }
        if ("" === username) {
            setError("Please fill this in")
            return
        }
        if ("" === password) {
            setError("Please fill this in")
            return
        }

        // api call to send the info to the backend to insert

    }

    return (
        <div className="App">
            <header className="main">
                <button onClick={() => loginClick} className={"loginButtonDefault"}>
                    Go Back
                </button>
                <div className={"title"}>
                    <div>Enter the employee id of the nurse you'd like to update information:</div>
                </div>

                <div>
                    <input
                        value={employee_id}
                        placeholder="Enter nurse's employee id here"
                        onChange={ev => setEmployeeId(ev.target.value)}
                        className={"inputBox"}
                    />
                    <label className="errorLabel">{blankError}</label>

                    <button onClick={() => loginClick} className={"loginButtonDefault"}>
                        Search
                    </button>

                </div>

                <div class="flex-container">
                    <div class="flex-child magenta">
                        <div className={"title"}>
                            <div>Nurse Information:</div>
                        </div>


                    </div>

                    <div class="flex-child green">
                        <div className={"title"}>
                            <div>Please enter the following information to register a nurse:</div>
                        </div>

                        <input
                            value={employee_id}
                            placeholder="Enter nurse's employee id here"
                            onChange={ev => setEmployeeId(ev.target.value)}
                            className={"inputBox"}
                        />
                        <label className="errorLabel">{blankError}</label>

                        <input
                            value={name}
                            placeholder="Enter nurse's name here"
                            onChange={ev => setName(ev.target.value)}
                            className={"inputBox"}
                        />
                        <label className="errorLabel">{blankError}</label>

                        <input
                            value={age}
                            placeholder="Enter nurse's age here"
                            onChange={ev => setAge(ev.target.value)}
                            className={"inputBox"}
                        />
                        <label className="errorLabel">{blankError}</label>

                        <input
                            value={gender}
                            placeholder="Enter your gender here"
                            onChange={ev => setGender(ev.target.value)}
                            className={"inputBox"}
                        />
                        <label className="errorLabel">{blankError}</label>

                        <input
                            value={phone_number}
                            placeholder="Enter nurse's phone number here"
                            onChange={ev => setPhoneNumber(ev.target.value)}
                            className={"inputBox"}
                        />
                        <label className="errorLabel">{blankError}</label>

                        <input
                            value={address}
                            placeholder="Enter nurse's address here"
                            onChange={ev => setAddress(ev.target.value)}
                            className={"inputBox"}
                        />
                        <label className="errorLabel">{blankError}</label>

                        <input
                            value={username}
                            placeholder="Enter nurse's username here"
                            onChange={ev => setUsername(ev.target.value)}
                            className={"inputBox"}
                        />
                        <label className="errorLabel">{blankError}</label>

                        <input
                            value={password}
                            placeholder="Enter nurse's password here"
                            onChange={ev => setPassword(ev.target.value)}
                            className={"inputBox"}
                        />
                        <label className="errorLabel">{blankError}</label>

                        <button onClick={() => loginClick} className={"loginButtonDefault"}>
                            Update Nurse Information
                        </button>
                    </div>
                </div>

            </header>
        </div>
    );
}

export default UpdateNurse;