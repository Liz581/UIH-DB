// import React, { useState } from "react";
// import { useNavigate } from 'react-router-dom';
// import './AddVaccine.css';

// function AddVaccine() {
//     const [vaccine, setVaccine] = useState("");
//     const [company, setCompany] = useState("");
//     const [doses_required, setDosesRequired] = useState();
//     const [description, setDescription] = useState("");
//     const [blankError, setError] = useState("");
//     // const navigate = useNavigate();

//     const registerN = () => {

//     }

//     const updateN = () => {

//     }

//     const deleteN = () => {

//     }

//     const addV = () => {

//     }

//     const updateV = () => {

//     }

//     const viewN = () => {

//     }

//     const viewP = () => {

//     }

//     return (
//         <div className="App">
//             <header className="App-header">
//                 <button onClick={() => registerN} className={"buttonDefault"}>
//                     Go Back
//                 </button>

//                 <div className={"title"}>
//                     <div>Please enter the vaccine information:</div>
//                 </div>

//                 <input
//                     value={employee_id}
//                     placeholder="Enter nurse's employee id here"
//                     onChange={ev => setEmployeeId(ev.target.value)}
//                     className={"inputBox"}
//                 />
//                 <label className="errorLabel">{blankError}</label>

//                 <input
//                     value={name}
//                     placeholder="Enter nurse's name here"
//                     onChange={ev => setName(ev.target.value)}
//                     className={"inputBox"}
//                 />
//                 <label className="errorLabel">{blankError}</label>

//                 <input
//                     value={age}
//                     placeholder="Enter nurse's age here"
//                     onChange={ev => setAge(ev.target.value)}
//                     className={"inputBox"}
//                 />
//                 <label className="errorLabel">{blankError}</label>

//                 <input
//                     value={gender}
//                     placeholder="Enter your gender here"
//                     onChange={ev => setGender(ev.target.value)}
//                     className={"inputBox"}
//                 />
//                 <label className="errorLabel">{blankError}</label>
//             </header>
//         </div>
//     );
// }

// export default AddVaccine;