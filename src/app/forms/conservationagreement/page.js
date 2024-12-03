"use client";

import React, { useState, useEffect } from "react";
import Bubble from "../../components/bubble/bubble";
import Button from "../../components/button/button";
import "../page.css";
import { createUpdate } from '../../lib/actions';
import { useActionState } from "react";
import { fetchProjects, getUserID } from "../../lib/data";
import { create } from "domain";

export default function ConservationAgreementPage() {

  const initialState = { message: null, errors: {} };
  const [state, formAction] = useActionState(createUpdate, initialState);
  const [project, setProject] = useState("");
  const [projectID, setProjectID] = useState("")
  const [projects, setProjects] = useState([])
  const [user_id, setUserID] = useState("")
  const [isFirstPopupOpen, setIsFirstPopupOpen] = useState(false);
  const [isOtherPopupOpen, setIsOtherPopupOpen] = useState(false);

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

  const [signature, setSignature] = useState("");
  const [date, setDate] = useState("");

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
    <form>
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
          <button className="agree-button" onClick={() => createUpdate("conservation-agreement", projectID)}>Agree</button>
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
    </form>
  );

}
