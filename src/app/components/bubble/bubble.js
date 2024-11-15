import './bubble.css'


export default function Bubble(props) {
    function handleClick() {
        if (props.onClick) {
            props.onClick();
        }
    };

    return (
        <div className="circle-wrapper">
            <button className="button-for-bubble" onClick={handleClick()} id={props.size}>
                <div className="circle" style={{ width: props.width, height: props.height }}>
                    <h1 className="headinginput">{props.heading}</h1>
                    <h3 className='midtext'>{props.midtext}</h3>
                    <p className="subtext">{props.subtext}</p>
                </div>
            </button>
        </div>
    )
}