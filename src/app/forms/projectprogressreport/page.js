"use client";

import Bubble from "../../components/bubble/bubble";
import React, { useState, useEffect } from 'react';
import styles from "../page.css";
import Button from "../../components/button/button";
import {createUpdate} from "../../lib/actions"
import { fetchProjects, getUserID } from "../../lib/data";

export default function ProjectProgressPage() {

  const [finished, setFinished] = useState("");
  const [notFinished, setnotFinished] = useState("");
  const [conservation, setConservation] = useState("");
  const [project, setProject] = useState("");
  const [projects, setProjects] = useState([])
  const [projectID, setProjectID] = useState("")
  const [user_id, setUserID] = useState("")
  const [isFirstPopupOpen, setIsFirstPopupOpen] = useState(false);
  const [isOtherPopupOpen, setIsOtherPopupOpen] = useState(false);

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
    if (finished == "" || notFinished == "" || conservation == "" || project == "") {
      return
    }


    const subject = `Project Progress Report: ${project}`
    const body = `Hello! 
    
                  A project progress report was submitted for ${project} Here are the responses:

                  ***Note: Please attach any files you may want to share (images, videos, etc.).

                  Tell us what you finished: ${finished}

                  Tell us what you didn't finish: ${notFinished}

                  Conservation Efforts: ${conservation}
                  
                  Thanks!`
    sendEmail("nishant.malpani@berkeley.edu", subject, body)
    const now = new Date()
    const currentDate = now.toDateString()
    console.log("Current time: ", currentDate)
    createUpdate("project-progress-report", projectID, currentDate);
  };

  const openFirstPopup = () => {
    setIsFirstPopupOpen(!isFirstPopupOpen);
  };

  const sendEmail = (to, subject, body) => {
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }


  const handleSelectProject = (selectedProject) => {
    if (selectedProject == "Other") {
      setIsOtherPopupOpen(true);
    }else{
      setProject(selectedProject.project_name);
      setProjectID(selectedProject.project_id)
    }
    setIsFirstPopupOpen(false);
  };

  const closeOtherPopup = () => {
    setIsOtherPopupOpen(false);
  };

  return (
    <form>
      <div className="formPage">
      <h1 className="formHeading">Project Progress Report</h1>
      <hr className= "formYellow-line"></hr>
      <hr className = "formBlue-line"></hr>
      <div className="form-container">
        <div className="form-fields">


          <label>
            Project:
            <div className="formDropdown-container">
                <input type="text" value={project} onClick={openFirstPopup} readOnly placeholder="Select a project" className = "page" required/>
                <input id = "project-id" type="hidden" value = {projectID} required />
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
            Tell us what you finished:
            <textarea type="text" value={finished} onChange={(e) => setFinished(e.target.value)} required />
          </label>
          <label>
            Tell us what is not finished:
            <textarea type="text" value={notFinished} onChange={(e) => setnotFinished(e.target.value)} required />
          </label>
          <label>
            Conservation Efforts:
            <textarea type="text" value={conservation} onChange={(e) => setConservation(e.target.value)} required />
          </label>
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
    </form>
  );
}
