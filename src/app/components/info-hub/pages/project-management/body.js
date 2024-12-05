import styles from "./body.css"
import Guide_Editing from "../../../guide-editing/guide-editing"

export default function Body(props) {

    function ListProcess(item) {
        if (item.type == 'paragraph') {
            return (
                <div>
                <p key = {item.content}>{item.content}</p>
                <Guide_Editing/>
                </div>
            )
        }
        
        else if (item.type == 'header') {
            return (
                <div>
                <h2 key = {item.content}>{item.content}</h2>
                <Guide_Editing/>
                </div>
            ) 
        }

        else if (item.type == 'bullet-point') {
            return (
                <ul>
                    <div>
                    <li key={item.content}>{item.content}</li>
                    <Guide_Editing/>
                    </div>
                </ul>
            )
        }
    }

    return (
        <div>
            <div>
                <h1 className="body-title">{props.title}</h1>
            </div>
            <div className = "bodyText">
                {props.textList.map(textItem => <div key={textItem.content} className = "listItem">{ListProcess(textItem)}</div>)}
            </div>
        </div>
    );
}