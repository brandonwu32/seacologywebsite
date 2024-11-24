import './searchitem.css';

export default function SearchItem(props) {
    const maxLength = 60;
    function truncateString(text) {
        if (text.length >= maxLength) {
            return text.substr(0, maxLength) + '...'
        } else {
            return text
        }
    }
    return (
        <div className = 'item-container'>
            <a href = {props.item.page}>
            <div className = 'item-header-container'>
                <div className = 'item-header'>
                    <p className = 'page-url'>Page: {props.item.page}</p>
                    <p className = 'position-number'>Line: {props.item.position}</p>
                </div>

            </div>
            <div className = 'item-content'>
                {truncateString(props.item.content)}
            </div>
            </a>
        </div>
    )
}