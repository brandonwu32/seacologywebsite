'use client';
import './geaddpopup.css'
import React, { useState } from 'react';
import Button from '../../button/button';


export default function GEAddPopUp(props) {
const types = ["header", "paragraph", "bullet-point"]
const [type, setType] = useState("");
const [txt, setFinished] = useState("");
const [isFirstPopupOpen, setIsFirstPopupOpen] = useState(false);

const openFirstPopup = () => {
    setIsFirstPopupOpen(!isFirstPopupOpen);
  };

const handleSelectType = (selectedType) => {
    setType(selectedType);
    setIsFirstPopupOpen(false);
}
    return props.trigger ? (
        <div className="gepopupOverlay">
            <div className="gepopup">
                <div className='gerectangle'>
                    <p className='gename'>Add Text</p>
                    <hr className="geyellowline" />
                    <div className = 'addcontainer'>
                        <div className = "geadd-fields">
                            <label> 
                                Text Type:
                                <div className="formDropdown-container">
                                    <input type="text" value={type} onClick={openFirstPopup} readOnly placeholder="Select text type" className = "geaddpop"/>
                                {isFirstPopupOpen && (
                                    <div className="GEADDDropdown-list">
                                        {types.map((typ, index) => (
                                        <div key={index} className="GEADDDropdown-item" onClick={() => handleSelectType(proj)}>
                                            {typ}
                                        </div>
                                        ))}
                                    </div>
                                )}
                                </div>
                            </label>
                            <label>
                                Input Text:
                                <textarea type="text" value={txt} onChange={(e) => setFinished(e.target.value)}/>
                            </label>
                        </div>
                    </div>
                </div>
                    <div className = 'gebuttonz'>
                        <Button color="blue" size="large" text="Submit" onClick={props.close}/>
                        <Button color="blue" size="large" text="Close" onClick={props.close}/>
                </div>
        </div>
        </div>
    ) : null;
    }