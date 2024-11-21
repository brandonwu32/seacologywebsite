import styles from "./body.css"

export default function Body(props) {

    function ListProcess(item) {
        if (item.type == 'paragraph') {
            return (
                <p key = {item.content}>{item.content}</p>
            )
        }
        
        else if (item.type == 'header') {
            return (
                <h2 key = {item.content}>{item.content}</h2>
            ) 
        }

        else if (item.type == 'bullet-point') {
            return (
                <ul>
                    <li key={item.content}>{item.content}</li>
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