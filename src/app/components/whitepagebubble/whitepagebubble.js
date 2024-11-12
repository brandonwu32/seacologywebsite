import './whitepagebubble.css'
import Image from "next/image";
import WhitePagePopUp from "../whitepagepopup/infopopup/infopopup";
import { useState } from "react"; 


export default function WhitePageBubble(props) {
    const [buttonPopUp, setButtonPopUp] = useState(false);
    function handleClick() {
        if (props.onClick) {
            props.onClick(); 
        }
    };
    const togglePopUp = () => {
        setButtonPopUp(!buttonPopUp);
      }
    return (
        <div className = "individual-bubble">
            <button onClick={handleClick} className="bubble"> 
                <Image src={props.src} alt="none" className="bubble-image" width={250} height={250} />
            </button>
            <div className="description">
                <p>{props.name}</p>
                <p>{props.position}</p> 
                <p>{props.email}</p>
            </div>
            <WhitePagePopUp trigger={buttonPopUp} close = {togglePopUp} name={props.name}/>
        </div>
    )
}