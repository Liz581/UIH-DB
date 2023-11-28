import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './DeleteNurse.css';


function DeleteNurse() {
    const [employee_id, setEmployeeId] = useState();
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

        // api call to send the info to the backend to insert

    }

    return (
        <div className="App">
            <header className="main">
                <button onClick={() => loginClick} className={"loginButtonDefault"}>
                    Go Back
                </button>

                <div className={"title"}>
                    <div>Enter the employee id of the nurse you'd like to remove from the database:</div>
                </div>

                <input
                    value={employee_id}
                    placeholder="Enter nurse's employee id here"
                    onChange={ev => setEmployeeId(ev.target.value)}
                    className={"inputBox"}
                />
                <label className="errorLabel">{blankError}</label>

                <button onClick={() => loginClick} className={"loginButtonDefault"}>
                    Remove
                </button>

            </header>
        </div>
    );
}

export default DeleteNurse;