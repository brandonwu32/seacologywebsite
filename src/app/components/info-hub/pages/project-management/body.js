

export default function Body(props) {
    function convertToListItems(textList) {
        console.log(textList)
        return (
            <div>{textList.map(textItem => {<li key = {textItem}>{textItem}</li>})}</div>
        )
    }

    var textList = ["hello", "World"]
    
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