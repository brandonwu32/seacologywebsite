import './editpagebubble.css'
import Image from "next/image";
import { useState } from "react";
import { useState } from "react";
import EditPagePopUp from '../../whitepagepopup/adminpopup/editpagepopup';


export default function EditPageBubble(props) {
    const [buttonPopUp, setButtonPopUp] = useState(false);
    const togglePopUp = () => {
        if (buttonPopUp) {
            window.location.reload();
        }
        setButtonPopUp(!buttonPopUp);
      }
    console.log(props)
    return (
        <div className = "individual-bubble">
            <button onClick={togglePopUp} className="bubble"> 
                <Image src={props.src} alt="none" className="bubble-image" width={250} height={250} />
            </button>
            <div className="ebdescription">
                <p className='ebprop'>{props.name}</p>
                <p className='ebprop'>{props.position}</p>
                <p className='ebprop'>{props.email}</p>
            </div>
            <EditPagePopUp trigger={buttonPopUp} close = {togglePopUp} user_id = {props.user_id}/>
        </div>
    )
}