"use client";
import Bubble from "../../components/bubble/bubble";
import React, { useState } from 'react';
import styles from "../page.css";
import Button from "../../components/button/button";

export default function ReimbursementPage() {


  const [project, setProject] = useState("");
  const [reimbursement, setReimbursement] = useState("");
  const [expenses, setExpenses] = useState("");

  const handleSubmit = () => {
    console.log({
      project,
      reimbursement,
      expenses,
    });
  };

  const [isFirstPopupOpen, setIsFirstPopupOpen] = useState(false);
  const [isSecondPopupOpen, setIsSecondPopupOpen] = useState(false);
  const [isOtherPopupOpen, setIsOtherPopupOpen] = useState(false);
  const [isSecondOtherPopupOpen, setIsSecondOtherPopupOpen] = useState(false);

  const openFirstPopup = () => {
    setIsFirstPopupOpen(!isFirstPopupOpen);
  };


  const handleSelectProject = (selectedProject) => {
    if (selectedProject == "Other") {
      setIsOtherPopupOpen(true);
    }else{
      setProject(selectedProject);
    }
    setIsFirstPopupOpen(false);
  };
  const closeOtherPopup = () => {
    setIsOtherPopupOpen(false);
  };

  const handleSelectReimbursement = (selectedReimbursement) => {
    if (selectedReimbursement == "Other") {
      setIsSecondOtherPopupOpen(true);
    }else{
      setReimbursement(selectedReimbursement);
    }
    setIsSecondPopupOpen(false);
  };

  const closeSecondOtherPopup = () => {
    setIsSecondOtherPopupOpen(false);
  };

  const openSecondPopup = () => {
    setIsSecondPopupOpen(!isSecondPopupOpen);
  };

  const projects = ["Project 1", "Project 2", "Project 3", "Project 4", "Other"];
  const reimbursements = ["Travel Equipment", "Construction & Materials", "Other"];
  return (
    <div className="page">
      <h1 className="heading">Reimbursement</h1>
      <hr className= "yellow-line"></hr>
      <hr className = "blue-line"></hr>
      <div className="form-container">
        <div className="form-fields">
          <label>
            Project:
            <div className="dropdown-container">
            <input type="text" value={project} onClick={openFirstPopup} readOnly placeholder="Select a project" className = "page"/>
            {isFirstPopupOpen && (
              <div className="dropdown-list">
                {projects.map((proj, index) => (
                  <div key={index} className="dropdown-item" onClick={() => handleSelectProject(proj)}>
                    {proj}
                  </div>
                ))}
              </div>
            )}
            </div>
          </label>
            <label>
            Type of Reimbursement:
            <div className="dropdown-container">
            <input type="text" value={reimbursement} onClick={openSecondPopup} readOnly placeholder="Select a reimbursement" className = "page"/>
            {isSecondPopupOpen && (
              <div className="dropdown-list">
                {reimbursements.map((reim, index) => (
                  <div key={index} className="dropdown-item" onClick={() => handleSelectReimbursement(reim)}>
                    {reim}
                  </div>
                ))}
              </div>
            )}
            </div>
            </label>
          <label>
            List of Expenses:
            <textarea type="text" value={expenses} onChange={(e) => setExpenses(e.target.value)}/>
          </label>
        </div>
        <div className="upload-bubbles">
            <div className="file-circle">
                <label className="button-for-bubble">
                    <input id="image-upload" type="file" className="file-input" />
                    <p className="subtext">Upload Files</p>
                </label>
            </div>

        </div>
      </div>
      <div className="button-container">
        <button className="close-button">back</button>
        <button className="enter-button" onClick = {handleSubmit}>enter</button>
      </div>
{isOtherPopupOpen && (
        <div className="popupOverlay">
          <div className="popup">
              <div className = 'rectangle'>
              <p className = "subtext"> Enter Project</p>
              <hr className= "yellow-line" />
                <textarea type = "text" className = "bubs"
                  placeholder="Describe your project"
                  onChange={(e) => setProject(e.target.value)}
                />
            </div>
            <div className = "buttonz">
              <Button color = "blue" size = "small" text = "Close" onClick={closeOtherPopup}/>
            </div>
          </div>
        </div>
      )}

  {isSecondOtherPopupOpen && (
        <div className="popupOverlay">
          <div className="popup">
              <div className = 'rectangle'>
              <p className = "subtext"> Enter Reimbursement</p>
              <hr className= "yellow-line" />
                <textarea type = "text" className = "bubs"
                  placeholder="Describe your reimbursement"
                  onChange={(e) => setReimbursement(e.target.value)}
                />
            </div>
            <div className = "buttonz">
              <Button color = "blue" size = "small" text = "Close" onClick={closeSecondOtherPopup}/>
            </div>
          </div>
        </div>
      )}



</div>


  );
}

