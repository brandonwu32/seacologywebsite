import styles from "../welcome/welcome.css"
import Bubble from "../../../bubble/bubble"
import Navbar from "../../../navbar/navbar"
import Heading from "../../heading"
import Button from "../../../button/button"

export default function Welcome() {
    return (
        <div>
            <Navbar/>
            <div className="page-wrapper">
                <Heading text="Welcome" buttonText = 'edit'/>

                {/* <div className="back-button-wrapper">
                    <Button color="blue" size="small" text="back"/>
                </div> */}

                {/* Figure out how to make the bubbles bigger */}

                <div className="welcome-wrapper">
                    <Bubble className="welcome-bubble" heading="G" width={'300px'} height={'300px'}/>
                    <Bubble className="welcome-bubble" heading="G" width={'300px'} height={'300px'}/>
                </div>

                <div className="welcome-wrapper">
                    <Bubble className="welcome-bubble" heading="G" width={'300px'} height={'300px'}/>
                    <Bubble className="welcome-bubble" heading="G" width={'300px'} height={'300px'}/>                
                </div>
                {/* <div className="next-button-wrapper">
                    <Button color="blue" size="small" text="next"/>
                </div> */}
            </div>
        </div>
    );
}