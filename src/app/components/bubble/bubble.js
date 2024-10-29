import './bubble.css'
 

export default function Bubble(props) {

    return (
        <div className = "circle">
            <h1 className = "heading">{props.heading}</h1>
            <p className="subtext">{props.subtext}</p>
        </div>
    )

}