import styles from "../welcome/welcome.css"
import Bubble from "../../../bubble/bubble"
import Navbar from "../../../navbar/navbar"
import Heading from "../../heading"
import Button from "../../../button/button"
import Link from "next/link"

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
<<<<<<< Updated upstream
                    <Bubble className="welcome-bubble" heading="Guidelines" width={'20rem'} height={'20rem'}/>
                    <Bubble className="welcome-bubble" heading="Project Management" width={'20rem'} height={'20rem'}/>
                </div>

                <div className="welcome-wrapper">
                    <Bubble className="welcome-bubble" heading="Financial" width={'20rem'} height={'20rem'}/>
                    <Bubble className="welcome-bubble" heading="Contact" width={'20rem'} height={'20rem'}/>                
                </div>
                
                <div className="button-wrapper">
                    <Link href="">
                        <Button color="blue" size="small" text="back"/>
                    </Link>
                    
                    <Link href="/step2">
                        <Button color="blue" size="small" text="next"/>
                    </Link>
                </div>
=======
                    <Bubble heading="G"/>
                    <Bubble heading="PM"/>
                </div>

                <div className="welcome-wrapper">
                    <Bubble heading="G" />
                    <Bubble heading="G"/>
                </div>

                {/* <div className="next-button-wrapper">
                    <Button color="blue" size="small" text="next"/>
                </div> */}
>>>>>>> Stashed changes
            </div>
        </div>
    );
}