"use client"
import "./guide-editing.css"
import Button from "../button/button"

export default function Guide_Editing(props) {

    return (
        <div className="gebigdiv">
            <Button color="blue" size="large" text="add below" onClick = {props.geaddopen}/>
            <Button color = "blue" size = "large" text = "edit above" onClick = {props.geeditopen}/>
            <Button color="red" size="large" text="remove above" onClick = {props.gedeleteopen}/>

        </div>

    )
}
