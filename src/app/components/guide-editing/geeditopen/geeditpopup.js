'use client';
import './geeditpopup.css'
import React, { useState } from 'react';
import Button from '../../button/button';
import { PUT } from '../../../seed/route'



export default function GEEditPopUp(props) {
const [finished, setFinished] = useState("");
const [notFinished, setnotFinished] = useState("");

function edit() {
    PUT(finished, type, props.position, props.page);
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
                                Input Text:
                                <div className="formDropdown-container">
                                    <textarea type="text" value={finished} onChange={(e) => setFinished(e.target.value)}/>
                                </div>
                            </label>
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