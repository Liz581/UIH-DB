import React, { useState} from "react";
import { useNavigate } from 'react-router-dom';
import './OptionSelect.css';

function OptionSelect() {
    // const navigate = useNavigate();
  
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
  
    return (
      <div className="App">
        <header className="App-header">
        <div className={"title"}>
            <div>Please select an option</div>
        </div>
          <button onClick={()=>registerN} className={"buttonDefault"}>
              Register
          </button>

          <button onClick={()=>updateN} className={"buttonDefault"}>
              Update Info
          </button>

          <button onClick={()=>deleteN} className={"buttonDefault"}>
              Schedule a Vaccination Time
          </button>

          <button onClick={()=>addV} className={"buttonDefault"}>
              Cancel Schedule
          </button>

          <button onClick={()=>updateV} className={"buttonDefault"}>
              View Information
          </button>
        </header>
      </div>
    );
  }
  
  export default OptionSelect;