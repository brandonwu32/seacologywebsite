"use client"
import "./guide-editing.css"
import Button from "../button/button"

export default function Guide_Editing() {

    function handleClick() {
        if (props.onClick) {
            props.onClick();
        }
    };


    return (
        <div className="gebigdiv">
            <Button color="blue" size="large" text="add below"/>

            <Button color="red" size="large" text="delete above"/>
        </div>

    )
}