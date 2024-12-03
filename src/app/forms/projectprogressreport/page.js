"use client";
import Bubble from "../../components/bubble/bubble";
import React, { useState } from 'react';
import styles from "../page.css";
import Button from "../../components/button/button";
import {createUpdate} from "../../lib/actions"

export default function ProjectProgressPage() {

  const [finished, setFinished] = useState("");
  const [notFinished, setnotFinished] = useState("");
  const [conservation, setConservation] = useState("");
  const [project, setProject] = useState("");

  const handleSubmit = () => {
    createUpdate("projectprogressreport", "123");
    console.log({
      finished,
      notFinished,
      conservation,
      project,
    });
  };

  const [isFirstPopupOpen] = useState(false);
  const [isOtherPopupOpen, setIsOtherPopupOpen] = useState(false);

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

  const projects = ["Project 1", "Project 2", "Project 3", "Project 4", "Other"];

  return (
    <div className="formPage">
      <h1 className="formHeading">Project Progress Report</h1>
      <hr className= "formYellow-line"></hr>
      <hr className = "formBlue-line"></hr>
      <div className="form-container">
        <div className="form-fields">


          <label>
            Project:
            <div className="formDropdown-container">
            <input type="text" value={project} onClick={openFirstPopup} readOnly placeholder="Select a project" className = "page"/>
            {isFirstPopupOpen && (
              <div className="formDropdown-list">
                {projects.map((proj, index) => (

                  <div key={index} className="formDropdown-item" onClick={() => handleSelectProject(proj)}>
                    {proj}
                  </div>
                ))}
              </div>
            )}
            </div>
          </label>
          <label>
            Tell us what you finished:
            <textarea type="text" value={finished} onChange={(e) => setFinished(e.target.value)}/>
          </label>
          <label>
            Tell us what is not finished:
            <textarea type="text" value={notFinished} onChange={(e) => setnotFinished(e.target.value)}/>
          </label>
          <label>
            Conservation Efforts:
            <textarea type="text" value={conservation} onChange={(e) => setConservation(e.target.value)}/>
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
    </div>
  );
}
