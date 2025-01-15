"use client";

import React, { useState, useEffect } from "react";
import Button from "../../components/button/button";
import "../page.css";
import { createUpdate } from '../../lib/actions';
import { fetchProjectsWithID, getUserID } from "../../lib/data";
import { useSearchParams } from 'next/navigation';
import { redirect } from 'next/navigation';


export default function ConservationAgreementPage() {

  const initialState = { message: null, errors: {} };
  const [project, setProject] = useState("");
  const [projectID, setProjectID] = useState("")
  const [projects, setProjects] = useState([])
  const [user_id, setUserID] = useState("")
  const [isFirstPopupOpen, setIsFirstPopupOpen] = useState(false);
  const [isOtherPopupOpen, setIsOtherPopupOpen] = useState(false);
  const [signature, setSignature] = useState("");
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
    const subject = `Conservation Agreement Signed: ${project}`
    const body = `Hello!

                  A conservation agreement was signed for ${project} on ${date}.

                  Here is their electronic signature: ${signature}

                  Thanks!`
    const now = new Date()
    const currentDate = now.toDateString()
    console.log("Current date: ", currentDate)
    const update = await createUpdate("conservation-agreement", projectID, date, sesh);
    alert(`Successfully Updated ${project}: Redirecting to Welcome Page`)
    sendEmail("nishant.malpani@berkeley.edu", subject, body)
    await new Promise((resolve) => setTimeout(resolve, 1000));
    redirect('/welcome?session=' + sesh)
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

  const sendEmail = (to, subject, body) => {
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <div>
      <input id = 'type' value='conservation-agreement' type='hidden'></input>
      <div className="agreement-page">
        <h1 className="agreement-heading">Conservation Agreement</h1>
        <hr className= "formYellow-line"></hr>
        <hr className = "formBlue-line"></hr>
        <div className="agreement-container">

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

              <Button type='submit' color = "blue" size = "small" text = "Close" onClick={closeOtherPopup}/>

          </div>
        </div>
      )}
    </div>
  );

}
