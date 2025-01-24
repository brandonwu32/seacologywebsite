import './bubble.css'


export default function Bubble(props) {
    function handleClick() {
        if (props.onClick) {
            props.onClick();
        }
    };

    return (
        <div className = "circle-wrapper-slay">
            <button className= "button-for-bubble" onClick={handleClick()} id= {props.size}>
                <div className = "bubble-circle-slay">
                    <h1 className = "headinginput">{props.heading}</h1>
                    <h1 className = "midtext">{props.midtext}</h1>
                    <p className="subtext">{props.subtext}</p>
                </div>
            </button>
        </div>
    )
}