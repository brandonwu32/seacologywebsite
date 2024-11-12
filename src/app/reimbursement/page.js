"use client";
import Bubble from "../components/bubble/bubble";
import React, { useState } from 'react';
import styles from "./page.css";

export default function ReimbursementPage() {
  
 
  const [project, setProject] = useState("");
  const [reimbursment, setReimbursment] = useState("");
  const [expenses, setExpenses] = useState("");
  
  const handleSubmit = () => {
    console.log({
      project,
      reimbursment,
      expenses,
    });
  };

  const [isFirstPopupOpen, setIsFirstPopupOpen] = useState(false);
  const [isSecondPopupOpen, setIsSecondPopupOpen] = useState(false);
  
  const openFirstPopup = () => {
    setIsFirstPopupOpen(!isFirstPopupOpen);
  };

  const openSecondPopup = () => {
    setIsSecondPopupOpen(!isSecondPopupOpen);
  };

  const handleSelectProject = (selectedProject) => {
    setProject(selectedProject);
    setIsFirstPopupOpen(false); 
  };

  const handleSelectReimbursment = (selectedReimbursment) => {
    setReimbursment(selectedReimbursment);
    setIsSecondPopupOpen(false); 
  };

  const projects = ["Project 1", "Project 2", "Project 3", "Project 4"];

  return (
    <div className="page">
      <h1 className="heading">Expense Reimbursement</h1>
      <div className = "blue-line"></div>
      <div className="yellow-line"></div>
      <div className="form-container">
        <div className="form-fields">
          <label>
            Project:
            <div className="dropdown-container">
            <input id = "project-input" type="text" value={project} onClick={openFirstPopup} readOnly placeholder="Select a project"/>
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
              <input id = "reimbursment-input" type="text" value={reimbursment} onClick={openSecondPopup} readOnly placeholder="Select a reimbursment"/>
              {isSecondPopupOpen && (

                <div className="dropdown-list">
                  <div className="dropdown-item" onClick={() => handleSelectReimbursment("Travel Equipment")}>Travel Equipment</div>
                  <div className="dropdown-item" onClick={() => handleSelectReimbursment("Construction & Materials")}>Construction & Materials</div>
                  <div className="dropdown-item" onClick={() => handleSelectReimbursment("Other")}>Other</div>
                </div>
              )}
              </div>
            </label>
          <label>
            List of Expenses:
            <input type="text" value={expenses} onChange={(e) => setExpenses(e.target.value)}/>
          </label>
        </div>

        <div className="upload-bubbles">
          <div className="bubble">
            <Bubble heading="Upload Files" subtext=".pdf" />
          </div>
          <div className="bubble">
            <Bubble heading="Upload Image" subtext=".png" />
          </div>
        </div>
      </div>
      <div className="button-container">
        <button className="close-button">close</button>
        <button className="enter-button" onClick = {handleSubmit}>enter</button>
      </div>
    </div>
  );
}
