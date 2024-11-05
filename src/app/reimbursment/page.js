"use client";
import Bubble from "../components/bubble/bubble";
import button from "../components/button/button";
import styles from "./page.css";
import React, { useState } from 'react';

export default function ProjectProposalPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState("");
  
  const handleOpenPopup = () => setIsPopupOpen(!isPopupOpen);
  const handleSelectProject = (project) => {
    setSelectedProject(project);
    setIsPopupOpen(false); 
  };

  return (
    <div className="page">
      <h1 className="heading">Expense Reimbursement</h1>
      <div className="yellow-line"></div>
      <div className="form-container">
        <div className="form-fields">
          <label>Last Name:<input type="text" /></label>
          <label>First Name:<input type="text" /></label>
          <label>Email:<input type="text" /></label>
          
          <label>Project:
            <input
              type="text"
              value={selectedProject}
              onClick={handleOpenPopup}
              readOnly
              placeholder="Select a project"
            />
            
            {isPopupOpen && (
              <div className="dropdown-list">
                <div className="dropdown-item" onClick={() => handleSelectProject("Project 1")}>Project 1</div>
                <div className="dropdown-item" onClick={() => handleSelectProject("Project 2")}>Project 2</div>
                <div className="dropdown-item" onClick={() => handleSelectProject("Project 3")}>Project 3</div>
              </div>
            )}
          </label>
          
          <label>Type of Reimbursement:
          <input 
            type="text"
            value={selectedProject}
            onClick={handleOpenPopup}
            readOnly
            placeholder="Select a project"
          
          />
          
          </label>
          <label>List of Expenses:<input type="number" /></label>
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
        <button className="enter-button">enter</button>
      </div>
    </div>
  );
}
