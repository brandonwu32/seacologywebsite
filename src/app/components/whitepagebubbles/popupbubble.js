import "./popupbubble.css";
import Image from "next/image";


export default function WhitePageBubble(props) {
    return (
        <div className = "individual-bubble">
            <button className="bubble"> 
                <Image src={props.src} alt="none" className="bubble-image" width={250} height={250} />
            </button>
            <div className="pbdescription">
                <p>{props.name}</p>
                <p>{props.position}</p> 
                <p>{props.email}</p>
            </div>
        </div>
    )
}