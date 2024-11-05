import Navbar from "../../../../components/navbar/navbar";
import Button from '../../../../components/button/button';
import Bubble from "../../../../components/bubble/bubble";
import Heading from "../../../../components/info-hub/heading"
import Body from "./body";

export default function Identifying() {
    var textList = [
        "What conservation measures will the community be taking, and for how long?",
        "What are the biggest threats to the local environment?",
        "Please describe the area to be protected: its location, size, and  characteristics. What animals and plants live there? Is it a legally protected area? If so, describe the protections in force now. ",
        "Please list any threatened species of plants or animals that live in the protected area.",
        "How will the community make sure the  area is protected? Be as specific as you  can."
    ]
    return (
        <div>
            <Navbar/>
            <div className="page-wrapper">
                <Heading text="New Project Proposal" buttonText="edit"/>

                <div>
                    <Body textList={textList} title="New Project Proposal Conversation"/>
                </div>

                <div className="button-wrapper">
                    <Button color="blue" size="small" text="back"/>
                    <Button color="blue" size="small" text="next"/>
                </div>
            </div>
        </div>
    );
}