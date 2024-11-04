import './whitepagespopup.css'
import Image from "next/image";


export default function WhitePagePopUp(props) {      /*Make pop up appear*/    
    return props.trigger ? (
        <div className = "popup">
            <p>skdjflskdj</p>
        </div>
    ) : ""
    ;
};
