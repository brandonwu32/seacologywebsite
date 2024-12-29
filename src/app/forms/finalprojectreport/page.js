"use client";
import Bubble from "../../components/bubble/bubble";
import React, { useState, useEffect } from 'react';
import styles from "../page.css";
import Button from "../../components/button/button";
import {createUpdate} from "../../lib/actions"
import { fetchProjects, getUserID } from "../../lib/data";
import { useSearchParams } from 'next/navigation';
import Link from 'next/link'

export default function FinalProjectPage() {

  const [finished, setFinished] = useState("");
  const [notFinished, setnotFinished] = useState("");
  const [conservation, setConservation] = useState("");
  const [final, setFinal] = useState("");
  const [project, setProject] = useState("");
  const [projects, setProjects] = useState([])
  const [projectID, setProjectID] = useState("")
  const [user_id, setUserID] = useState("")
  const [isFirstPopupOpen, setIsFirstPopupOpen] = useState(false);
  const [isOtherPopupOpen, setIsOtherPopupOpen] = useState(false);
  const searchParams = useSearchParams();
  let sesh = searchParams.get("session");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projectsResult = await fetchProjects(sesh);
        setProjects(projectsResult);
        console.log(projectsResult);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [isFirstPopupOpen]);

  const sendEmail = (to, subject, body) => {
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }


  const handleSubmit = async () => {
    if (project == "" || final == "" || conservation == "" || finished == "") {
      return
    }

    const subject = `Project Progress Report: ${project}`
    const body = `Hello!

                  A new project progress report was submitted for ${project} Here are the responses:

                  ***Note: Please attach any files you may want to share (images, videos, etc.).

                  Tell us what you finished: ${finished}

                  Conservation Efforts: ${conservation}

                  Final Fiancial Report: ${final}

                  Thanks!`
    const now = new Date()
    const currentDate = now.toDateString()
    console.log("Current time: ", currentDate)
    const update = await createUpdate("final-project-report", projectID, currentDate, sesh);
    alert(`Successfully Updated ${project}: Redirecting to Welcome Page`)
    sendEmail("nishant.malpani@berkeley.edu", subject, body)
    await new Promise((resolve) => setTimeout(resolve, 1000));
  };

  const openFirstPopup = () => {
    setIsFirstPopupOpen(!isFirstPopupOpen);
  };


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
      <div className="formPage">
      <h1 className="formHeading">Final Project  Report</h1>
      <hr className= "formYellow-line"></hr>
      <hr className = "formBlue-line"></hr>
      <div className="form-container">
        <div className="form-fields">

          <label>
            Project:
            <div className="formDropdown-container">
                <input type="text" value={project} onClick={openFirstPopup} readOnly placeholder="Select a project" className = "page"/>
                <input id = "project-id" type="hidden" value = {projectID} required/>
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
            Conservation Efforts:
            <textarea type="text" value={conservation} onChange={(e) => setConservation(e.target.value)} required/>
          </label>
          <label>Final Financial Report:
            <textarea type="text" value={final} onChange={(e) => setFinal(e.target.value)} required/>
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
            <Link href={'/forms/finalprojectreport?=' + sesh}>
              <Button color = "blue" size = "small" text = "Close" onClick={closeOtherPopup}/>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
