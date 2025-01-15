'use client';

import './geeditpopup.css'
import React, { useState, useEffect } from 'react';
import Button from '../../button/button';
import { putContent } from '../../../lib/actions'


export default function GEEditPopUp(props) {
const [finished, setFinished] = useState(props.editingwords);
const [finishedType, setFinishedType] = useState(props.editingType);
const [isFirstPopupOpen, setIsFirstPopupOpen] = useState(false);
const openFirstPopup = () => {
    setIsFirstPopupOpen(!isFirstPopupOpen);
  };
const types = ["header", "paragraph", "bullet-point"]

useEffect(() => {
    setFinished(props.editingwords);
}, [props.editingwords]);

useEffect(() => {
    setFinishedType(props.editingType);
}, [props.editingType]);

function edit() {
    putContent(finished, finishedType, props.editingID);
    window.location.reload();
}

const handleSubmit = () => {
    console.log({
        finished,
        notFinished,
    });
};


return props.trigger ? (
    <div className="geepopupOverlay">
        <div className="geepopup">
            <div className='geerectangle'>
                <p className='geename'>Edit Text</p>
                <hr className="geeyellowline" />
                <div className = 'editcontainer'>
                    <div className = "geedit-fields">
                        <label>
                            <textarea type="text" value={finished} onChange={(e) => setFinished(e.target.value)}/>
                        </label>
                    </div>
                </div>
                <p className='geename'>Edit Type</p>
                <hr className="geeblueline" />
                <div className = 'editcontainer'>
                    <div className = "formDropdown-container">
                        <input type="text" value={finishedType} onClick={openFirstPopup} readOnly placeholder="Select text type" className = "geaddpop"/>
                        {isFirstPopupOpen && (
                            <div className="formDropdown-list">
                                {types.map((typ, index) => (
                                    <div key={index} className="formDropdown-item" onClick={() => setFinishedType(typ)}>
                                        {typ}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
                <div className = 'geebuttonz'>
                    <Button color="blue" size="large" text="Submit" onClick={() => edit()}/>
                    <Button color="blue" size="large" text="Close" onClick={props.close}/>
            </div>
    </div>
    </div>
) :null;
}