"use client";

import React, { useState, useEffect } from "react";
import Bubble from "../../components/bubble/bubble";
import Button from "../../components/button/button";
import styles from "../page.css";
import { createUpdate } from '../../lib/actions';
import { fetchProjects, getUserID } from "../../lib/data";

export default function ConservationAgreementPage() {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [signature, setSignature] = useState("");
  const [project, setProject] = useState("");
  const [projectID, setProjectID] = useState("")
  const [projects, setProjects] = useState([])
  const [user_id, setUserID] = useState("")
  const [isFirstPopupOpen, setIsFirstPopupOpen] = useState(false);
  const [isOtherPopupOpen, setIsOtherPopupOpen] = useState(false);
  const [date, setDate] = useState("");

  useEffect(() => {
    const user = async () => {
      try {
        const result = await getUserID();
        setUserID(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    user()


    const projects = async () => {
      try {
        const result = await fetchProjects(user_id);
        setProjects(result);
        console.log(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    projects()

  }, [isFirstPopupOpen]);

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
    <div className="agreement-page">
      <h1 className="agreement-heading">Grant Agreement</h1>
      <hr className= "formYellow-line"></hr>
      <hr className = "formBlue-line"></hr>
      <div className="agreement-container">

        <div className="form-fields">
          {/* <label>
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
            </label> */}
          <label>
            Last name:
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
          <label>
            First name:
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
          <label>
            Electronic Signature:
            <input
              type="text"
              value={signature}
              onChange={(e) => setSignature(e.target.value)}
            />
          </label>
          <label>
              Date:
              <input
                id = 'date'
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </label>
        </div>

        <div className="agreement-text-box">
          <p>
            One-page agreement that sets out what Seacology and the community
            are promising to do. It is important to make sure that the community
            members understand and agree with the agreement.
          </p>
        </div>
      </div>

      <div className="agree-button-container">
        <button className="agree-button" onClick={() => createUpdate("grant-agreement-form")}>Agree</button>
      </div>
    </div>
  );
}
