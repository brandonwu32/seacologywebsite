import "./popupbubble.css";
import Image from "next/image";


export default function WhitePageBubble(props) {
    return (
        <div className = "wp-individual-bubble">
            <button className="pububble">
                <Image src={props.image} alt="none" className="bubble-image-wppu" width={150} height={150} />
            </button>
        </div>
    )
}