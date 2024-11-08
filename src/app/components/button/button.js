"use client"
import "./button.css"; 

export default function Button(props) {

    function handleClick() {
        if (props.onClick) {
            props.onClick(); 
        }
    };


    return (
        <div className="button"> 
            <button className={props.color} onClick={handleClick}  id={props.size}> 
                <div>
                    {props.text}
                </div>
            </button>
        </div> 


    )
}
