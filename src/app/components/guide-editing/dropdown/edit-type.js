"use client";
import React, { useState } from 'react';
const [type, setType] = useState("");
const types = ["bullet-point", "paragraph", "header"]
const [finished, setFinished] = useState("");
const [notFinished, setnotFinished] = useState("");
return(
    <div className="formDropdown-container">
    <input type="text" value={type} onClick={openFirstPopup} readOnly placeholder="Select a type" className = "page"/>
    {isFirstPopupOpen && (
        <div className="formDropdown-list">
        {projects.map((typ, index) => (
            <div key={index} className="formDropdown-item" onClick={() => handleSelectProject(typ)}>
            {typ}
            </div>
        ))}
        </div>
    )}
    </div>
)
