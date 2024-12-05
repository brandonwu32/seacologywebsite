"use client";
import Bubble from "../../components/bubble/bubble";
import React, { useState, useEffect } from 'react';
import styles from "../page.css";
import Button from "../../components/button/button";
import {createUpdate} from "../../lib/actions"
import { fetchProjects, getUserID } from "../../lib/data";

export default function ReimbursementPage() {
  
  const [project, setProject] = useState("");
  const [reimbursement, setReimbursement] = useState("");
  const [expenses, setExpenses] = useState("");
  const [projects, setProjects] = useState([])
  const [projectID, setProjectID] = useState("")
  const [user_id, setUserID] = useState("")
  const [isFirstPopupOpen, setIsFirstPopupOpen] = useState(false);
  const [isOtherPopupOpen, setIsOtherPopupOpen] = useState(false);
  const [isSecondPopupOpen, setIsSecondPopupOpen] = useState(false);
  const [isSecondOtherPopupOpen, setIsSecondOtherPopupOpen] = useState(false);
  const reimbursements = ["Travel Equipment", "Construction & Materials", "Other"];


  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResult = await getUserID();
        setUserID(userResult);
  
        const projectsResult = await fetchProjects(userResult);
        setProjects(projectsResult);
        console.log(projectsResult);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, [isFirstPopupOpen]);

  const handleSubmit = () => {
    const now = new Date()
    const currentDate = now.toDateString()
    console.log("Current time: ", currentDate)
    createUpdate("reimbursement", projectID, currentDate);
  };

  const openFirstPopup = () => {
    setIsFirstPopupOpen(!isFirstPopupOpen);
  };


  const handleSelectProject = (selectedProject) => {
    if (selectedProject == "Other") {
      setIsOtherPopupOpen(true);
    }else{
      setProject(selectedProject);
      setProjectID(selectedProject.project_id)
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

  return (
    <div className="formPage">
      <h1 className="formHeading">Reimbursement</h1>
      <hr className= "formYellow-line"></hr>
      <hr className = "formBlue-line"></hr>
      <div className="form-container">
        <div className="form-fields">
          <label>
            Project:
            <div className="formDropdown-container">
                <input type="text" value={project} onClick={openFirstPopup} readOnly placeholder="Select a project" className = "page"/>
                <input id = "project-id" type="hidden" value = {projectID}/>
                {isFirstPopupOpen && (
                <div className="formDropdown-list">
                    {projects.map((proj, index) => (

                    <div key={index} className="formDropdown-item" onClick={() => handleSelectProject(proj)}>
                        {proj.project_name}
                    </div>
                    ))}
                    <div className="formDropdown-item" onClick={() => handleSelectProject("Other")}>
                        Other
                    </div>
                </div>
                )}
            </div>
          </label>
            <label>
            Type of Reimbursement:
            <div className="formDropdown-container">
            <input type="text" value={reimbursement} onClick={openSecondPopup} readOnly placeholder="Select a reimbursement" className = "page"/>
            {isSecondPopupOpen && (
              <div className="formDropdown-list">
                {reimbursements.map((reim, index) => (
                  <div key={index} className="formDropdown-item" onClick={() => handleSelectReimbursement(reim)}>
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
        <div className="formUpload-bubbles">
            <div className="formFile-circle">
                <label className="formButton-for-bubble">
                    <input id="image-upload" type="file" className="formFile-input" />
                    <p className="formSubtext">Upload Files</p>
                </label>
            </div>
            <div className="formFile-circle">
                <label className="formButton-for-bubble">
                    <input id="image-upload" type="file" className="formFile-input" />
                    <p className="formSubtext">Upload Images</p>
                </label>
            </div>
            <div className="formFile-circle">
                <label className="formButton-for-bubble">
                    <input id="image-upload" type="file" className="formFile-input" />
                    <p className="formSubtext">Upload Videos</p>
                </label>
            </div>
        </div>
      </div>
      <div className="formButton-container">
        <button className="formClose-button">back</button>
        <button className="formEnter-button" onClick = {handleSubmit}>enter</button>
      </div>
{isOtherPopupOpen && (
        <div className="formPopupOverlay">
          <div className="formPopup">
              <div className = 'formRectangle'>
              <p className = "formSubtext"> Enter Project</p>
              <hr className= "formYellow-line" />
                <textarea type = "text" className = "formBubs"
                  placeholder="Describe your project"
                  onChange={(e) => setProject(e.target.value)}
                />
            </div>
            
              <Button color = "blue" size = "small" text = "Close" onClick={closeOtherPopup}/>
            
          </div>
        </div>
      )}

  {isSecondOtherPopupOpen && (
        <div className="formPopupOverlay">
          <div className="formPopup">
              <div className = 'formRectangle'>
              <p className = "formSubtext"> Enter Reimbursement</p>
              <hr className= "formYellow-line" />
                <textarea type = "text" className = "formBubs"
                  placeholder="Describe your reimbursement"
                  onChange={(e) => setReimbursement(e.target.value)}
                />
            </div>
            
              <Button color = "blue" size = "small" text = "Close" onClick={closeSecondOtherPopup}/>
            
          </div>
        </div>
      )}



</div>


  );
}

