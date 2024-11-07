import './whitepagebubble.css'
import Image from "next/image";


export default function WhitePageBubble(props) {
    function handleClick() {
        if (props.onClick) {
            props.onClick(); 
        }
        console.log("yee");
    };

    return (
        <div className = "individual-bubble">
            <button onClick={handleClick} className="bubble"> 
                <Image src={props.src} alt="none" className="bubble-image" width={190} height={150} />
            </button>
            <div className="description">
                <p>{props.name}</p>
                <p>{props.position}</p> 
                <p>{props.email}</p>
            </div>
        </div>
    )
}