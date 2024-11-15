"use client";
import Bubble from "../components/bubble/bubble";
import React, { useState } from 'react';
import styles from "./page.css";

export default function FinalProjectPage() {
  
  const [finished, setFinished] = useState("");
  const [conservation, setConservation] = useState("");
  const [final, setFinal] = useState("");
  const [project, setProject] = useState("");
  
  const handleSubmit = () => {
    console.log({
      finished,
      conservation,
      final,
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
      <h1 className="heading">Final Project Report</h1>
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
            <textarea type="text" value={finished} onChange={(e) => setFinished(e.target.value)}/>
          </label>
          <label>
            Conservation Efforts:
            <textarea type="text" value={conservation} onChange={(e) => setConservation(e.target.value)}/>
          </label>
          <label>Final Financial Report:
            <textarea type="text" value={final} onChange={(e) => setFinal(e.target.value)}/>
          </label>

        </div>


        <div className="upload-bubbles">
        <div className="circle">
        <label className="button-for-bubble">
            <input id="image-upload" type="file" className="file-input" />
            <p className="subtext">Upload Files</p>
        </label>
    </div>
    <div className="circle">
        <label className="button-for-bubble">
            <input id="image-upload" type="file" className="file-input" />
            <p className="subtext">Upload Video</p>
        </label>
    </div>
    <div className="circle">
        <label className="button-for-bubble">
            <input id="image-upload" type="file" className="file-input" />
            <p className="subtext">Upload Image</p>
        </label>
    </div>
      </div>
      </div>
      <div className="button-container">
        <button className="close-button">back</button>
        <button className="enter-button" onClick = {handleSubmit}>enter</button>
      </div>
    </div>
  );
}
