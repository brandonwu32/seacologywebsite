import styles from "../project-management/pm-overview.css"
import Navbar from "../../../../components/navbar/navbar";
import Button from '../../../../components/button/button';
import Bubble from "../../../../components/bubble/bubble";
import Heading from "../../../../components/info-hub/heading"

export default function PM_Overview() {
    return (
        <>
            <Navbar/>
            <Heading text="Project Management" buttonText = 'edit'/>

            <div className="pm-overview-h1-wrapper">
                <h1 className="pm-overview-h1">Project Management Life Cycle</h1>
            </div>
            
            <div className="back-button-wrapper">
                <Button color="blue" size="small" text="back"/>
            </div>

            <div className="row1-wrapper">
                <Bubble heading="G"/>
                <Bubble heading="PM"/>
                <Bubble heading="PM"/>
            </div>

            <div className="row2-wrapper">
                <Bubble />
                <Bubble />
                <Bubble heading="PM"/>
            </div>

            <div className="next-button-wrapper">
                <Button color="blue" size="small" text="next"/>
            </div>
        </>
    );
}