import React, { useState} from "react";
import { useNavigate } from 'react-router-dom';
import './OptionSelect.css';

function OptionSelect() {
    // const navigate = useNavigate();
    console.log("WTF");
    const registerN = () => {
  
    }

    const updateN = () => {

    }

    const deleteN = () => {

    }

    const addV = () => {

    }

    const updateV = () => {

    }

    const viewN = () => {

    }

    const viewP = () => {

    }
  
    return (
      <div className="App">
        <header className="App-header">
        <div className={"title"}>
            <div>Please select an option</div>
        </div>
          <button onClick={()=>registerN} className={"buttonDefault"}>
              Register a Nurse
          </button>

          <button onClick={()=>updateN} className={"buttonDefault"}>
              Update Nurse Info
          </button>

          <button onClick={()=>deleteN} className={"buttonDefault"}>
              Delete a Nurse
          </button>

          <button onClick={()=>addV} className={"buttonDefault"}>
              Add Vaccine
          </button>

          <button onClick={()=>updateV} className={"buttonDefault"}>
              Update Vaccine
          </button>

          <button onClick={()=>viewN} className={"buttonDefault"}>
              View Nurse
          </button>

          <button onClick={()=>viewP} className={"buttonDefault"}>
              View Patient Info
          </button>
        </header>
      </div>
    );
  }
  
  export default OptionSelect;