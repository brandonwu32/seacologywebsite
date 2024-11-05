import styles from "../project-management/pm-overview.css"
import Navbar from "../../../../components/navbar/navbar";
import Button from '../../../../components/button/button';
import Bubble from "../../../../components/bubble/bubble";
import Heading from "../../../../components/info-hub/heading"

export default function PM_Overview() {
    return (
        <div>
            <Navbar/>
            <div className="page-wrapper">
                <Heading text="Project Management" buttonText = 'edit'/>

                <div>
                    <h1 className="pm-overview-h1">Project Management Life Cycle</h1>
                </div>

                <div className="welcome-wrapper">
                    <Bubble heading="G"/>
                    <Bubble heading="PM"/>
                    <Bubble heading="PM"/>
                </div>

                <div className="welcome-wrapper">
                    <Bubble />
                    <Bubble />
                    <Bubble heading="PM"/>
                </div>

                <div className="button-wrapper">
                    <Button color="blue" size="small" text="back"/>
                    <Button color="blue" size="small" text="next"/>
                </div>
            </div>
        </div>
    );
}