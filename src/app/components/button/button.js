'use client'
import "./Button.css"; 

export default function Button(props) {

    function handleClick() {
        if (props.onClick) {
            props.onClick(); 
        }
    };

    return (
        <div className="button"> 
            <button  onClick={handleClick} > 
                <div>
                    {props.image}
                </div>
            </button>
        </div> 


    )
}
