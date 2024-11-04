import './whitepagebubble.css'
import Image from "next/image";


export default function WhitePageBubble(props) {
    function handleClick() {
<<<<<<< HEAD
        if (props.onClick) {
=======
        if (props.onClick) {   /* replace tghis with other funtion that renders popup */
>>>>>>> 9e671606022cd3aa57af8d2225440336e5874e11
            props.onClick(); 
        }
        console.log("yee");
    };
    return (
        <div>
            <button onClick={handleClick} className = "bubble"> 
                <Image src={props.src} alt="none" className="bubble-image" width= {190} height= {150}/>
            </button>
            <div className = "description">
<<<<<<< HEAD
                    <p>{props.name}</p>
                    <p>{props.position}</p> 
                    <p>{props.email}</p>
                </div>
=======
                <p>{props.name}</p>
                <p>{props.position}</p> 
                <p>{props.email}</p>
            </div>
>>>>>>> 9e671606022cd3aa57af8d2225440336e5874e11
        </div>
            
    )
}