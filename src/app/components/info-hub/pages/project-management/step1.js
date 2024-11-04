import styles from "./step1.css"
import Navbar from "../../../../components/navbar/navbar";
import Button from '../../../../components/button/button';
import Bubble from "../../../../components/bubble/bubble";
import Heading from "../../../../components/info-hub/heading"
import Body from "./body";

export default function Step1() {
    return (
        <>
        <Navbar/>
        <Heading text="Step 1" buttonText="edit"/>

        <div className="pm-overview-h1-wrapper">
            <h1 className="pm-overview-h1">Step 1: Find a New Project</h1>
        </div>

        <div className="back-button-wrapper">
            <Button color="blue" size="small" text="back"/>
        </div>

        <div className="text1-wrapper">
            <Body className="test" text="Finding a new project can be hard! Click the links below to see some of our advice on identifying good
            Seacology Projects and New Project Proposal Conversation that may help build the project framework."/>
        </div>

        <div className="row1-wrapper">
            <Bubble subtext="Identifying Good Seacology Projects"/>
            <Bubble subtext="Now Project Proposal Conversation"/>
        </div>

        <div className="text2-wrapper">
            <Body className="test" text="In the ideal Seacology project, an island community agrees to protect some part of the natural
            environment, such as a coral reef, rainforest, or mangrove forest. In exchange for this commitment,
            Seacology funds a community benefit, such as a community center, water system, alternative energy
            system, or school. Seacology does not fund salaries, scientific research, diesel generators,
             or motorized boats or other vehicles."/>
        </div>

        <div className="next-button-wrapper">
            <Button color="blue" size="small" text="next"/>
        </div>
        </>
    );
}