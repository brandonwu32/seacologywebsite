"use client";

import React, { useState, useEffect } from "react";
import styles from "../page.css";
import { createUpdate } from '../../lib/actions';
import { fetchProjectsWithID, getUserID } from "../../lib/data";
import { useSearchParams } from 'next/navigation';
import { redirect } from 'next/navigation';

export default function GrantAgreementPage() {
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
  const searchParams = useSearchParams();
  let sesh = searchParams.get("session");

  useEffect(() => {
    const projects = async () => {
      try {
        const result = await fetchProjectsWithID(sesh);
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

  const handleSubmit = async () => {
    if (firstName == "" || lastName == "" || signature == "" || date == "" || project == "") {
      return
    }
    const subject = `Conservation Agreement Signed: ${project}`
    const body = `Hello!

                  A conservation agreement was signed for ${project} on ${date}.

                  Here is their first name: ${firstName}.

                  Here is their last name: ${lastName}.

                  Here is their electronic signature: ${signature}

                  Thanks!`
    const now = new Date()
    const currentDate = now.toDateString()
    console.log("Current date: ", currentDate)
    const update = await createUpdate("grant-agreement-form", projectID, currentDate, sesh)
    alert(`Successfully Updated ${project}: Redirecting to Welcome Page`)
    sendEmail("islands@seacology.org", subject, body)
    await new Promise((resolve) => setTimeout(resolve, 1000));
    redirect('/welcome?session=' + sesh)
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
      <div className="agreement-page">
      <h1 className="agreement-heading">Grant Agreement</h1>
      <hr className= "formYellow-line"></hr>
      <hr className = "formBlue-line"></hr>
      <div className="agreement-container">

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
            Last name:
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </label>
          <label>
            First name:
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </label>
          <label>
            Electronic Signature:
            <input
              type="text"
              value={signature}
              onChange={(e) => setSignature(e.target.value)}
              required
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
        <button className="agree-button" onClick={handleSubmit}>Agree</button>
      </div>
    </div>
  );
}
