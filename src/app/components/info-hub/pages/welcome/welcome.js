import styles from "../welcome/welcome.css"
import Bubble from "../../../bubble/bubble"

export default function Welcome() {
    return (
        <>
        <div className="row1-wrapper">
            <Bubble />
            <Bubble />
        </div>
        <div className="row2-wrapper">
            <Bubble />
            <Bubble />
        </div>
        </>
    );
}