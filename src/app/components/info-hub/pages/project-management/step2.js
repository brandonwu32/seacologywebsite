<<<<<<< Updated upstream
=======
import styles from "./step2.css"
>>>>>>> Stashed changes
import Navbar from "../../../../components/navbar/navbar";
import Button from '../../../../components/button/button';
import Bubble from "../../../../components/bubble/bubble";
import Heading from "../../../../components/info-hub/heading"
<<<<<<< Updated upstream
import Body from "./body"

export default function Step2() {
    var itemOne = {
        type: "paragraph",
        content: "When you have identified a project that looks promising, send Seacology a brief (no more than three paragraphs) description. You may receive many requests for funding from different communities. Do not send us a project idea unless you think it is a good one!"
    };
    
    var itemTwo = {
        type: "paragraph",
        content: "This step is essential to ensure that the project is a good fit for Seacology. We will let you know whether or not we want to prepare a full proposal for the board."
    };
    
    var itemThree = {
        type: "paragraph",
        content: "Conflicts of interest. If you, or a friend or relative, would personally benefit in any way from a Seacology project, that is a conflict of interest. Such conflicts are inevitable on small islands, where many people are related or are friends. We can approve a project even if there is a conflict of interest; we just need to know about the conflict."
    };
    
    var textList = [itemOne, itemTwo, itemThree];

=======
import Body from "./body";

export default function Step2() {
>>>>>>> Stashed changes
    return (
        <div>
            <Navbar/>
            <div className="page-wrapper">
                <Heading text="Step 2" buttonText="edit"/>

                <div>
<<<<<<< Updated upstream
                    <Body textList={textList} title="Step 2: Send Us the Idea"/>
                </div>

                <div className="button-wrapper">
                    <Button color="blue" size="small" text="back"/>
=======
                    <Button color="blue" size="small" text="back"/>
                </div>

                <div>
                    <h1 className="pm-overview-h1">Step 2: Send Us the Idea</h1>
                </div>

                <div>
                    <Body text="When you have identified a project that looks promising, send Seacology a brief (no more than three  paragraphs)
                    description.
                    You may receive many requests for funding from different communities.
                    Do not send us a project idea unless you think it is a good one! "/>
                </div>

                <div>
                    <Body text="This step is essential to ensure that the project is a good fit for Seacology.
                    We will let you know  whether or not we want to prepare a full proposal for the board. "/>
                </div>

                <div>
                    <Body text="Conflicts of interest. If you, or a friend or relative, would personally benefit in any way from a  Seacology project, 
                    that is a conflict of interest. Such conflicts are inevitable on small islands, where 
                    many people are related or are friends. We can approve a project even if there is a conflict of interest  
                    we just need to know about the conflict. "/>
                </div>

                <div>
>>>>>>> Stashed changes
                    <Button color="blue" size="small" text="next"/>
                </div>
            </div>
        </div>
    );
}