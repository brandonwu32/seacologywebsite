import styles from "../welcome/welcome.css"
import Bubble from "../../../bubble/bubble"
import Navbar from "../../../navbar/navbar"
import Heading from "../../heading"
import Button from "../../../button/button"

export default function Welcome() {
    return (
        <>

        <Navbar/>
        <Heading text="Welcome" buttonText = 'edit'/>

        <div className="back-button-wrapper">
            <Button color="blue" size="small" text="back"/>
        </div>

        <div className="row1-wrapper">
            <Bubble heading="Guidelines"/>
            <Bubble heading="Project Management"/>
        </div>

        <div className="row2-wrapper">
            <Bubble />
            <Bubble />
        </div>

        <div className="next-button-wrapper">
            <Button color="blue" size="small" text="next"/>
        </div>

        </>
    );
}