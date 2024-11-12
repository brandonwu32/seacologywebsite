"use client";
import Bubble from "../components/bubble/bubble";
import React, { useState } from 'react';
import styles from "./page.css";

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
  
  
  const openFirstPopup = () => {
    setIsFirstPopupOpen(!isFirstPopupOpen);
  };


  const handleSelectProject = (selectedProject) => {
    setProject(selectedProject);
    setIsFirstPopupOpen(false); 
  };

  const projects = ["Project 1", "Project 2", "Project 3", "Project 4"];

  return (
    <div className="page">
      <h1 className="heading">Project Progress Report</h1>
      <div className = "blue-line"></div>
      <div className="yellow-line"></div>
      <div className="form-container">
        <div className="form-fields">
         
          <label>
            Project:
            <div className="dropdown-container">
            <input type="text" value={project} onClick={openFirstPopup} readOnly placeholder="Select a project"/>
            
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
            <input type="text" value={finished} onChange={(e) => setFinished(e.target.value)}/>
          </label>
          <label>
            Tell us what is not finished:
            <input type="text" value={notFinished} onChange={(e) => setnotFinished(e.target.value)}/>
          </label>
          <label>
            Conservation Efforts:
            <input type="text" value={conservation} onChange={(e) => setConservation(e.target.value)}/>
          </label>

        </div>



        <div className="upload-bubbles">
          <div className="bubble">
            <Bubble heading="Upload Files" subtext=".pdf" />
          </div>
          <div className="bubble">
            <Bubble heading="Upload Image" subtext=".png" />
          </div>
          <div className = "bubble">
            <Bubble heading = "Upload Video" subtext = ".mp4" />
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
