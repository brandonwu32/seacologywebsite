import "./popupbubble.css";
import Image from "next/image";


export default function WhitePageBubble(props) {
    return (
        <div className = "wp-individual-bubble">
            <button className="pububble">
                <Image src={props.image} alt="https://media.licdn.com/dms/image/v2/C560BAQFGLEe_yK2JRw/company-logo_200_200/company-logo_200_200/0/1630601534327/seacology_logo?e=1746662400&v=beta&t=pG41ZFN10ckgCxb3Cu5RQiVv0Rbo9SGrcVF1rTf5PFo" className="bubble-image-wppu" width={150} height={150} />
            </button>
        </div>
    )
}