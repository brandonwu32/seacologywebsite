import styles from "./body.css"

export default function Body(props) {
    return (
        <>
         <div className="body-text-wrapper">
            <p>{props.text}</p>
        </div>
        </>
    );
}