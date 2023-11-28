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
              Update Information
          </button>

          <button onClick={()=>updateN} className={"buttonDefault"}>
              Schedule Time
          </button>

          <button onClick={()=>deleteN} className={"buttonDefault"}>
              Cancel a Time
          </button>

          <button onClick={()=>addV} className={"buttonDefault"}>
              View Information
          </button>

          <button onClick={()=>updateV} className={"buttonDefault"}>
              Vaccination
          </button>
        </header>
      </div>
    );
  }
  
  export default OptionSelect;