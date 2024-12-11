'use client'
import styles from "./body.css"
import Guide_Editing from "../../../guide-editing/guide-editing"
import GEAddPopUp from "../../../guide-editing/geaddpopup/geaddpopup"
import GEDeletePopUp from "../../../../components/guide-editing/gedeletepopup/gedeletepopup"
import GEEditPopUp from "../../../../components/guide-editing/geeditopen/geeditpopup"
import { useState } from "react";

export default function Body(props) {
    const [addTextPopUp, setAddPopUp] = useState(false);
    const [deleteTextPopUp, setDeletePopUp] = useState(false);
    const [editTextPopup, setEditPopup] = useState(false);
    const [guideline2remove, setGuideline2remove] = useState('');
    const [position2add, setPositionadd] = useState(0);
    const [page2put, setPage2put] = useState('');




    function atogglePopUp (posish, payge) {
        setPositionadd(posish)
        setPage2put(payge)
        setAddPopUp(!addTextPopUp);
    }

    function etogglePopup(){
        setEditPopup(!editTextPopup)
    }

    function dtogglePopUp(guideline) {
        setGuideline2remove(guideline);
        setDeletePopUp(!deleteTextPopUp);

    }

   


    function ListProcess(item) {
        if (item.type == 'paragraph') {
            return (
                <div key = {item.position}>
                    <p>{item.content}</p>
                    <Guide_Editing geaddopen = {() => atogglePopUp(item.position + 1, item.page)} gedeleteopen = {() => dtogglePopUp(item.content)} geeditopen = {() => etogglePopup()}/>
                </div>
            )
        }
        
        else if (item.type == 'header') {
            return (
                <div key = {item.position}>
                <h2>{item.content}</h2>
                <Guide_Editing geaddopen = {() => atogglePopUp(item.position + 1, item.page)} gedeleteopen = {() => dtogglePopUp(item.content)} geeditopen = {() => etogglePopup()}/>
                </div>
            ) 
        }

        else if (item.type == 'bullet-point') {
            return (
                <ul>
                    <div key = {item.position} >
                    <li>{item.content}</li>
                    <Guide_Editing geaddopen = {() => atogglePopUp(item.position + 1, item.page)} gedeleteopen = {() => dtogglePopUp(item.content)} geeditopen = {() => etogglePopup()}/>
                    </div>
                </ul>
            )
        }
    }

    return (
        <div>
            <div>
                <h1 className="body-title">{props.title}</h1>
            </div>
            <div className = "bodyText">
                {props.textList.map(textItem => <div key={textItem.position} className = "listItem">{ListProcess(textItem)}</div>)}
            </div>
            <GEAddPopUp trigger={addTextPopUp} close = {atogglePopUp} position = {position2add} page = {page2put}/> 
            <GEDeletePopUp trigger = {deleteTextPopUp} close = {dtogglePopUp} deletingwords = {guideline2remove}/>
            <GEEditPopUp trigger = {editTextPopup} close = {etogglePopup}/>
        </div>
    );
}