'use client'
import styles from "./body.css"
import Guide_Editing from "../../../guide-editing/guide-editing"
import GEAddPopUp from "../../../guide-editing/geaddpopup/geaddpopup"
import GEDeletePopUp from "../../../../components/guide-editing/gedeletepopup/gedeletepopup"
import { useState } from "react";

export default function Body(props) {
    const [addTextPopUp, setAddPopUp] = useState(false);
    const [deleteTextPopUp, setDeletePopUp] = useState(false);

    const atogglePopUp = () => {
     setAddPopUp(!addTextPopUp);
    }
    const dtogglePopUp = () => {
        setDeletePopUp(!deleteTextPopUp);
       }

    function ListProcess(item) {
        if (item.type == 'paragraph') {
            return (
                <div key = {item.position}>
                    <p>{item.content}</p>
                    <Guide_Editing geaddopen = {atogglePopUp} gedeleteopen = {dtogglePopUp}/>
                    <GEAddPopUp trigger={addTextPopUp} close = {atogglePopUp}/> 
                    <GEDeletePopUp trigger = {deleteTextPopUp} close = {dtogglePopUp} deletingwords = {item.content}/>
                </div>
            )
        }
        
        else if (item.type == 'header') {
            return (
                <div key = {item.position}>
                <h2>{item.content}</h2>
                {/* <Guide_Editing/> */}
                </div>
            ) 
        }

        else if (item.type == 'bullet-point') {
            return (
                <ul>
                    <div key = {item.content} >
                    <li>{item.content}</li>
                    {/* <Guide_Editing/> */}
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
                {props.textList.map(textItem => <div key={textItem.content} className = "listItem">{ListProcess(textItem)}</div>)}
            </div>
        </div>
    );
}