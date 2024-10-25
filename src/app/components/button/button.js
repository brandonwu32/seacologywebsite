export default function Buttons(props) {
/* text , color, size, function*/

    return (
        <div className="button"> 
        <button className={props.color} id={props.size} > 
            <div>
                {props.text}

            </div>
        </button>
            </div> 


    )
}
