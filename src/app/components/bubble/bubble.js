import './bubble.css'
 

export default function Bubble(props) {
    function handleClick() {
        if (props.onClick) {
            props.onClick();
        }
    };

    return (
        <div className = "circle">
            <button className= {props.color} onClick={handleClick} id= {props.size}>
                <div className = "circle">
                    <h1 className = "heading">{props.heading}</h1>
                    <p className="subtext">{props.subtext}</p>
                </div>
            </button>
        </div>
    )
}