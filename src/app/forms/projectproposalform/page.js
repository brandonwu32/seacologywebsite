"use client";

import React, { useState } from "react";
import Bubble from "../../components/bubble/bubble";
import Button from "../../components/button/button";
import styles from "../page.css";
import {createUpdate, createProject} from "../../lib/actions"
import { fetchProjects, getUserID } from "../../lib/data";

import { NextResponse } from "next/server";
import path from "path";

export default function ProjectProposalPage() {
  const [timeProtected, setTimeProtected] = useState("");
  const [address, setAddress] = useState("");
  const [ownershipConfirmation, setOwnershipConfirmation] = useState("");
  const [communitySize, setCommunitySize] = useState("");
  const [fiscalAdmin, setFiscalAdmin] = useState("");
  const [projectCost, setProjectCost] = useState("");
  const [fundingSources, setFundingSources] = useState("");
  const [areaSizeType, setAreaSizeType] = useState("");
  const [threatenedSpecies, setThreatenedSpecies] = useState("");
  const [conflicts, setConflicts] = useState("");
  const [protectionDetails, setProtectionDetails] = useState("");
  const [projectName, setProjectName] = useState("");

  const sendEmail = (to, subject, body) => {
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  const handleSubmit = async () => {
    const fields = [projectName, timeProtected, ownershipConfirmation, fiscalAdmin, fundingSources, threatenedSpecies,
      protectionDetails, address, communitySize, projectCost, areaSizeType, conflicts];

    for (let i = 0; i < fields.length; i++) {
      if (fields[i] == "") {
        return;
      }
    }


    const subject = `Project Progress Report: ${projectName}`
    const body = `Hello!

                  A new project proposal was submitted. Here are the responses:

                  ***Note: Please attach any files you may want to share (images, videos, etc.).

                  Time area will be protected: ${timeProtected}

                  Conservation of ownership of protected area: ${ownershipConfirmation}

                  Name of fiscal administrator: ${fiscalAdmin}

                  Other sources of project funding, if any: ${fundingSources}

                  List of protected threatened or endangered species in the area, if any: ${threatenedSpecies}

                  Deatiled information abouth how the community will protect the proposed protected area: ${protectionDetails}

                  Address: ${address}

                  Number of people in the community: ${communitySize}

                  Estimated total cost of project: ${projectCost}

                  Protected area's size and type: ${areaSizeType}

                  Any conflicts of interest: ${conflicts}

                  Project Name: ${projectName}

                  Thanks!`
    const now = new Date()
    const currentDate = now.toDateString()
    console.log("Current date: ", currentDate)
    const update = await createProject("project created", projectName, currentDate, sesh)
    alert(`Successfully Updated ${project}: Redirecting to Welcome Page`)
    sendEmail("nishant.malpani@berkeley.edu", subject, body)
    await new Promise((resolve) => setTimeout(resolve, 1000));
  };


  return (
      <div className="proposalpage">
      <h1 className="proposalheading">New Project Proposal</h1>
      <hr className= "formYellow-line"></hr>
      <hr className = "formBlue-line"></hr>
      <div className="form-container">
        <div className="prop-form-fields">
          <label>
            Time area will be protected:
            <input type="text" value={timeProtected} onChange={(e) => setTimeProtected(e.target.value)} required/>
          </label>
          <label>
            Address:
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required/>
          </label>
          <label>
            Confirmation of ownership of protected area:
            <input type="text" value={ownershipConfirmation} onChange={(e) => setOwnershipConfirmation(e.target.value)} required/>
          </label>
          <label>
            Number of people in the community:
            <input type="number" value={communitySize} onChange={(e) => setCommunitySize(e.target.value)} required/>
          </label>
          <label>
            Name of fiscal administrator:
            <input type="text" value={fiscalAdmin} onChange={(e) => setFiscalAdmin(e.target.value)} required/>
          </label>
          <label>
            Estimated total cost of project:
            <input type="text" value={projectCost} onChange={(e) => setProjectCost(e.target.value)} required/>
          </label>
          <label>
            Other sources of project funding, if any:
            <input type="text" value={fundingSources} onChange={(e) => setFundingSources(e.target.value)} required/>
          </label>
          <label>
            Protected area’s size and type:
            <input type="text" value={areaSizeType} onChange={(e) => setAreaSizeType(e.target.value)} required/>
          </label>
          <label>
            List of protected threatened or endangered species in the area, if any:
            <textarea value={threatenedSpecies} onChange={(e) => setThreatenedSpecies(e.target.value)} required/>
          </label>
          <label>
            Any conflicts of interest:
            <textarea value={conflicts} onChange={(e) => setConflicts(e.target.value)} required/>
          </label>
          <label>
            Detailed information about how the community will protect the proposed protected area:
            <textarea value={protectionDetails} onChange={(e) => setProtectionDetails(e.target.value)} required/>
          </label>
          <label>
            Project Name:
            <textarea value={projectName} onChange={(e) => setProjectName(e.target.value)} required/>
          </label>
        </div>
      </div>

      <div className="propButton-container">
        <button className="formClose-button">back</button>
        <button className="formEnter-button" onClick={handleSubmit}>enter</button>
      </div>
    </div>
  );
}
