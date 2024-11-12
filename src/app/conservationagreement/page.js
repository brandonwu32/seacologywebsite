"use client"; 

import React, { useState } from "react";
import Bubble from "../components/bubble/bubble";
import Button from "../components/button/button";
import styles from "./page.css";

export default function ConservationAgreementPage() {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [signature, setSignature] = useState("");
  const [date, setDate] = useState("");

  const handleAgree = () => {
    console.log({
      lastName,
      firstName,
      signature,
      date,
    });
  };

  return (
    <div className="agreement-page">
      <h1 className="agreement-heading">Conservation Agreement</h1>
      <div className = "blue-line"></div>
      <div className="yellow-line"></div>
      <div className="agreement-container">
        
        <div className="form-fields">
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
              type="date" 
              value={date} 
              onChange={(e) => setDate(e.target.value)} 
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

      <div className="button-container">
        <button className="agree-button" onClick={handleAgree}>Agree</button>
      </div>
    </div>
  );
}
