'use client'
import styles from "./body.css"
import Guide_Editing from "../../../guide-editing/guide-editing"
import GEAddPopUp from "../../../guide-editing/geaddpopup/geaddpopup"
import GEDeletePopUp from "../../../../components/guide-editing/gedeletepopup/gedeletepopup"
import { useState } from "react";

export default function Body(props) {
    const [addTextPopUp, setAddPopUp] = useState(false);
    const [deleteTextPopUp, setDeletePopUp] = useState(false);
    const [guideline2remove, setGuideline2remove] = useState('');


    const atogglePopUp = () => {
     setAddPopUp(!addTextPopUp);
    }
    const dtogglePopUp = (wurd) => {
        setGuideline2remove(wurd)
        setDeletePopUp(!deleteTextPopUp);
       }


    function ListProcess(item) {
        if (item.type == 'paragraph') {
            return (
                <div key = {item.position}>
                    <p>{item.content}</p>
                    <Guide_Editing geaddopen = {atogglePopUp} gedeleteopen = {dtogglePopUp(item.content)}/>
                </div>
            )
        }
        
        else if (item.type == 'header') {
            return (
                <div key = {item.position}>
                <h2>{item.content}</h2>
                {/* <Guide_Editing geaddopen = {atogglePopUp} gedeleteopen = {dtogglePopUp}/> */}
                </div>
            ) 
        }

        else if (item.type == 'bullet-point') {
            return (
                <ul>
                    <div key = {item.position} >
                    <li>{item.content}</li>
                    {/* <Guide_Editing geaddopen = {atogglePopUp} gedeleteopen = {dtogglePopUp}/> */}
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
            <GEAddPopUp trigger={addTextPopUp} close = {atogglePopUp}/> 
            <GEDeletePopUp trigger = {deleteTextPopUp} close = {() => dtogglePopUp(guideline2remove)} deletingwords = {guideline2remove}/>
        </div>
    );
}