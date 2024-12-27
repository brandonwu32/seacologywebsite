'use client'
import styles from "./body.css"


export default function Body(props) {


    function ListProcess(item) {
        if (item.type == 'paragraph') {
            return (
                <div key = {item.position}>
                    <p>{item.content}</p>
                </div>
            )
        }

        else if (item.type == 'header') {
            return (
                <div key = {item.position}>
                <h2>{item.content}</h2>
                </div>
            )
        }

        else if (item.type == 'bullet-point') {
            return (
                <ul>
                    <div key = {item.position} >
                    <li>{item.content}</li>
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
                {props.textList.map(textItem => <div key={textItem.position} className = "listItem">{ListProcess(textItem)}</div>)}
            </div>
        </div>
    );
}