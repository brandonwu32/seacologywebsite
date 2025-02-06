import './editpagebubble.css'
import Image from "next/image";
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
    return (
        <div className = "individual-bubble">
            <button onClick={togglePopUp} className="bubble">
                <Image src={props.image} alt="https://media.licdn.com/dms/image/v2/C560BAQFGLEe_yK2JRw/company-logo_200_200/company-logo_200_200/0/1630601534327/seacology_logo?e=1746662400&v=beta&t=pG41ZFN10ckgCxb3Cu5RQiVv0Rbo9SGrcVF1rTf5PFo" className="bubble-image" width={250} height={250} />
            </button>
            <div className="ebdescription">
                <p className='ebprop'>{props.name}</p>
                <p className='ebprop'>{props.position}</p>
                <p className='ebprop'>{props.email}</p>
            </div>
            <EditPagePopUp trigger={buttonPopUp} close = {togglePopUp} user_id = {props.user_id} image = {props.image} name = {props.name} position = {props.position} email = {props.email}/>
        </div>
    )
}