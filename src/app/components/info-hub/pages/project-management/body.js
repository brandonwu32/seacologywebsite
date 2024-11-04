import styles from "./body.css"

export default function Body(props) {
    function convertToListItems(textList) {
        
        return (
            <div>{textList.map(textItem => {<li key = {textItem}>{textItem}</li>})}</div>
        )
    }

  
    
    return (
        <div>
            <div>
                <p>{props.title}</p>
            </div>
            <div className = "bodyText">
                {props.textList.map(textItem => (<li key = {textItem}>{textItem}</li>))}
            </div>
        </div>
    );
}