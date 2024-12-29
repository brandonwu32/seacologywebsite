'use client'
import { useState } from "react";
import './infobubble.css';
import Image from "next/image";
import WhitePagePopUp from "../../whitepagepopup/infopopup/infopopup";


export default function InfoPageBubble(props) {
    const [buttonPopUp, setButtonPopUp] = useState(false);

    const togglePopUp = () => {
        setButtonPopUp(!buttonPopUp);
    };


    return (
        <div className="individual-bubble">
            <button onClick={togglePopUp} className="bubble">
                <Image src={props.src} alt="none" className="bubble-image" width={250} height={250} />
            </button>
            <div className="ibdescription">
                <p className='ibprop'>{props.name}</p>
                <p className='ibprop'>{props.position}</p>
                <p className='ibprop'>{props.email}</p>
            </div>
            <WhitePagePopUp
                trigger={buttonPopUp}
                close={togglePopUp}
                name={props.name}
            />
        </div>
    );
}
