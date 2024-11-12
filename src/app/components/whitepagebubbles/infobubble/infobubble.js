import './infobubble.css'
import Image from "next/image";
import WhitePagePopUp from "../../whitepagepopup/infopopup/infopopup";
import { useState } from "react"; 


export default function InfoPageBubble(props) {
    const [buttonPopUp, setButtonPopUp] = useState(false);
    const [whiteList, setWhiteList] = useState([{"name":"tanya","project":"projectA","status":"ongoing","latestupdate":"01-11-2024"},
                                              {"name":"sophia","project":"projectA","status":"ongoing","latestupdate":"01-10-2024"},
                                              {"name":"bussy","project":"projectB","status":"ongoing","latestupdate":"02-20-2024"},
                                              {"name":"camila","project":"projectC","status":"ongoing","latestupdate":"02-23-2024"},
                                              {"name":"camila","project":"projectC","status":"ongoing","latestupdate":"02-23-2024"},
                                              {"name":"renata","project":"projectB","status":"ongoing","latestupdate":"02-27-2024"}]);

    const togglePopUp = () => {
        setButtonPopUp(!buttonPopUp);
      }
    return (
        <div className = "individual-bubble">
            <button onClick={togglePopUp} className="bubble"> 
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