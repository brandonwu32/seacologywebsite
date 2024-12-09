"use client"
import "./guide-editing.css"
import Button from "../button/button"
import GEAddPopUp from "./geaddpopup/geaddpopup";
import GEDeletePopUp from "./gedeletepopup/gedeletepopup";
import { useState, useEffect } from 'react';

export default function Guide_Editing(props) {
    // const [addTextPopUp, setAddPopUp] = useState(false);
    // const [deleteTextPopUp, setDeletePopUp] = useState(false);
    
    // const atogglePopUp = () => {
    //     setAddPopUp(!addTextPopUp);
    // }

    // const dtogglePopUp = () => {
    //     setDeletePopUp(!deleteTextPopUp);
    // }
          
    return (
        <div className="gebigdiv">
            <Button color="blue" size="large" text="add below" onClick = {props.geaddopen}/>

            <Button color="red" size="large" text="edit above" onClick = {props.gedeleteopen}/>

            {/* <div className = "thepopups">
                <GEAddPopUp trigger={addTextPopUp} close = {atogglePopUp}/> 
                <GEDeletePopUp trigger = {deleteTextPopUp} close = {dtogglePopUp} deletingwords = {props.editingwords}/>
            </div> */}
        </div>

    )
}
