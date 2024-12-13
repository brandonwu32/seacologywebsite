'use client';
import './geeditpopup.css'
import React, { useState, useEffect } from 'react';
import Button from '../../button/button';
import { PUT } from '../../../seed/route'
const types = ["header", "paragraph", "bullet-point"]
const [type, setType] = useState("");

export default function GEEditPopUp(props) {
const [finished, setFinished] = useState(props.editingwords);

useEffect(() => {
    setFinished(props.editingwords);
}, [props.editingwords]);

function edit() {
    PUT(finished, type);
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
            </div>
                <div className = 'geebuttonz'>
                    <Button color="blue" size="large" text="Submit" onClick={() => edit()}/>
                    <Button color="blue" size="large" text="Close" onClick={props.close}/>
            </div>
    </div>
    </div>
) :null;
}