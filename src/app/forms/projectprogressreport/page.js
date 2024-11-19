"use client";
import Bubble from "../../components/bubble/bubble";
import React, { useState } from 'react';
import styles from "./page.css";
import Button from "../../components/button/button";

export default function ProjectProgressPage() {

  const [finished, setFinished] = useState("");
  const [notFinished, setnotFinished] = useState("");
  const [conservation, setConservation] = useState("");
  const [project, setProject] = useState("");

  const handleSubmit = () => {
    console.log({
      finished,
      notFinished,
      conservation,
      project,
    });
  };

  const [isFirstPopupOpen, setIsFirstPopupOpen] = useState(false);
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
    <div className="page">
      <h1 className="heading">Project Progress Report</h1>
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
    </div>
  );
}
