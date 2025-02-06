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
                <Image src={props.image} alt="https://media.licdn.com/dms/image/v2/C560BAQFGLEe_yK2JRw/company-logo_200_200/company-logo_200_200/0/1630601534327/seacology_logo?e=1746662400&v=beta&t=pG41ZFN10ckgCxb3Cu5RQiVv0Rbo9SGrcVF1rTf5PFo" className="bubble-image" width={250} height={250} />
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
                image={props.image}
            />
        </div>
    );
}
