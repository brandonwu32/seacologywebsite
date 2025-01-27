'use client'
import styles from "./body.css"
import Guide_Editing from "../../../guide-editing/guide-editing"
import GEAddPopUp from "../../../guide-editing/geaddpopup/geaddpopup"
import GEDeletePopUp from "../../../guide-editing/gedeletepopup/gedeletepopup"
import GEEditPopUp from "../../../guide-editing/geeditopen/geeditpopup"
import { useState } from "react";

export default function BodyAdmin(props) {
    const [addTextPopUp, setAddPopUp] = useState(false);
    const [deleteTextPopUp, setDeletePopUp] = useState(false);
    const [editTextPopup, setEditPopup] = useState(false);
    const [guideline2remove, setGuideline2remove] = useState('');
    const [guidelineID2remove, setGuidelineID2remove] = useState('');
    const [guideline2edit, setGuideline2edit] = useState('');
    const [guidelineID2edit, setGuidelineID2edit] = useState('');
    const [guidelinesType, setGuidelinesType] = useState('')
    const [position2add, setPositionadd] = useState(0);
    const [page2put, setPage2put] = useState('');


    function atogglePopUp (posish, payge) {
        setPositionadd(posish)
        setPage2put(payge)
        setAddPopUp(!addTextPopUp);
        console.log(posish);
    }

    function etogglePopup(guideline, id, type){
        setGuideline2edit(guideline);
        setGuidelineID2edit(id);
        setGuidelinesType(type);
        setEditPopup(!editTextPopup)
    }

    function dtogglePopUp(guideline, id) {
        setGuideline2remove(guideline);
        setGuidelineID2remove(id);
        setDeletePopUp(!deleteTextPopUp);
    }




    function ListProcess(item) {
        if (item.type == 'paragraph') {
            return (
                <div key = {item.position}>
                    <p>{item.content}</p>
                    <Guide_Editing geaddopen = {() => atogglePopUp(item.position + 1, item.page)} gedeleteopen = {() => dtogglePopUp(item.content, item.id)} geeditopen = {() => etogglePopup(item.content, item.id, item.type)}/>
                </div>
            )
        }

        else if (item.type == 'header') {
            return (
                <div key = {item.position}>
                <h2>{item.content}</h2>
                <Guide_Editing geaddopen = {() => atogglePopUp(item.position + 1, item.page)} gedeleteopen = {() => dtogglePopUp(item.content, item.id)} geeditopen = {() => etogglePopup(item.content, item.id, item.type)}/>
                </div>
            )
        }

        else if (item.type == 'bullet-point') {
            return (
                <ul>
                    <div key = {item.position} >
                    <li>{item.content}</li>
                    <Guide_Editing geaddopen = {() => atogglePopUp(item.position + 1, item.page)} gedeleteopen = {() => dtogglePopUp(item.content, item.id)} geeditopen = {() => etogglePopup(item.content, item.id, item.type)}/>
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
            <GEDeletePopUp trigger = {deleteTextPopUp} close = {dtogglePopUp} deletingwords = {guideline2remove} deletingID={guidelineID2remove}/>
            <GEEditPopUp trigger = {editTextPopup} close = {etogglePopup} editingwords = {guideline2edit} editingID={guidelineID2edit} editingType={guidelinesType}/>
        </div>
    );
}