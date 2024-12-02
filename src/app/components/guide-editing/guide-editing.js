"use client"
import "./guide-editing.css"
import Button from "../button/button"
import { useState } from "react"; 
import AddPopUp from "../whitepagepopup/adminpopup/addpopup/addpopup"

export default function Guide_Editing() {
    const [addPopUp, setButtonPopUp] = useState(false);
    const toggleAddPopUp = () => {
        console.log("SLDKFJLSKDJF");
        setButtonPopUp(!addPopUp);
      }

      <AddPopUp trigger={addPopUp} close = {toggleAddPopUp}/>
    return (
        <div className="gebigdiv">
            <Button color="blue" size="large" text="add below" onClick = {toggleAddPopUp}/>

            <Button color="red" size="large" text="delete above" />
        </div>

    )
}