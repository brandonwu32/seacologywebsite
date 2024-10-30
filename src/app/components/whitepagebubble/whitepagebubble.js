import './whitepagebubble.css'

export default function whitePageBubble(props) {
    function handleClick() {
        if (props.onClick) {
            props.onClick(); 
        }
    };
    return (
        <div className="bubble"> 
            <button onClick={handleClick}> 
                <div className= 'image'>
                    <Image src={props.imageSrc} alt={props.altText || "Bubble image"} className="bubble-image" />
                </div>
            </button>
        </div> 
    )
}