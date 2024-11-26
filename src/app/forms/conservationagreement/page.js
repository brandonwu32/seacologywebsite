"use client";

import React, { useState } from "react";
import Bubble from "../../components/bubble/bubble";
import Button from "../../components/button/button";
import ProjectDropdown from "../../components/projectdropdown/projectdropdown";
import styles from "../page.css";
import { createUpdate } from '../../lib/actions';
import { useActionState } from "react";

export default function ConservationAgreementPage() {
  
  const initialState = { message: null, errors: {} };
  const [state, formAction] = useActionState(createUpdate, initialState);
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
    <form action = {formAction}>
      <div className="agreement-page">
        <h1 className="agreement-heading">Conservation Agreement</h1>
        <hr className= "formYellow-line"></hr>
        <hr className = "formBlue-line"></hr>
        <div className="agreement-container">

          <div className="form-fields">
            <label>
              Project:
              <ProjectDropdown/>
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

        <div className="agree-button-container">
          <button className="agree-button" onClick={handleAgree}>Agree</button>
        </div>
      </div>
    </form>
  );

}
