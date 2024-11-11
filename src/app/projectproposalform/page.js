"use client"; 

import React, { useState } from "react";
import Bubble from "../components/bubble/bubble";
import Button from "../components/button/button";
import styles from "./page.css";

export default function ProjectProposalPage() {
  const [fullName, setFullName] = useState("");
  const [timeProtected, setTimeProtected] = useState("");
  const [address, setAddress] = useState("");
  const [ownershipConfirmation, setOwnershipConfirmation] = useState("");
  const [phone, setPhone] = useState("");
  const [communitySize, setCommunitySize] = useState("");
  const [fiscalAdmin, setFiscalAdmin] = useState("");
  const [projectCost, setProjectCost] = useState("");
  const [fundingSources, setFundingSources] = useState("");
  const [areaSizeType, setAreaSizeType] = useState("");
  const [threatenedSpecies, setThreatenedSpecies] = useState("");
  const [conflicts, setConflicts] = useState("");
  const [protectionDetails, setProtectionDetails] = useState("");

  const handleSubmit = () => {
    console.log({
      fullName,
      timeProtected,
      address,
      ownershipConfirmation,
      phone,
      communitySize,
      fiscalAdmin,
      projectCost,
      fundingSources,
      areaSizeType,
      threatenedSpecies,
      conflicts,
      protectionDetails,
    });
  };

  return (
    <div className="page">
      <h1 className="heading">New Project Proposal</h1>
      
      <div className="form-container">
        <div className="form-fields">
          <label>
            Full Name:
            <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
          </label>
          <label>
            Time area will be protected:
            <input type="text" value={timeProtected} onChange={(e) => setTimeProtected(e.target.value)} />
          </label>
          <label>
            Address:
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
          </label>
          <label>
            Confirmation of ownership of protected area:
            <input type="text" value={ownershipConfirmation} onChange={(e) => setOwnershipConfirmation(e.target.value)} />
          </label>
          <label>
            Phone:
            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </label>
          <label>
            Number of people in the community:
            <input type="number" value={communitySize} onChange={(e) => setCommunitySize(e.target.value)} />
          </label>
          <label>
            Name of fiscal administrator:
            <input type="text" value={fiscalAdmin} onChange={(e) => setFiscalAdmin(e.target.value)} />
          </label>
          <label>
            Estimated total cost of project:
            <input type="text" value={projectCost} onChange={(e) => setProjectCost(e.target.value)} />
          </label>
          <label>
            Other sources of project funding, if any:
            <input type="text" value={fundingSources} onChange={(e) => setFundingSources(e.target.value)} />
          </label>
          <label>
            Protected area’s size and type:
            <input type="text" value={areaSizeType} onChange={(e) => setAreaSizeType(e.target.value)} />
          </label>
          <label>
            List of protected threatened or endangered species in the area, if any:
            <textarea value={threatenedSpecies} onChange={(e) => setThreatenedSpecies(e.target.value)} />
          </label>
          <label>
            Any conflicts of interest:
            <textarea value={conflicts} onChange={(e) => setConflicts(e.target.value)} />
          </label>
          <label>
            Detailed information about how the community will protect the proposed protected area:
            <textarea value={protectionDetails} onChange={(e) => setProtectionDetails(e.target.value)} />
          </label>
        </div>

        <div className="upload-bubbles">
          <Bubble heading="Upload Files" subtext=".pdf" />
          <Bubble heading="Upload Image" subtext=".png" />
        </div>
      </div>

      <div className="button-container">
        <button className="close-button">close</button>
        <button className="enter-button" onClick={handleSubmit}>enter</button>
      </div>
    </div>
  );
}
