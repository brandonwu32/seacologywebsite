import styles from "./step3.css"
import Navbar from "../../../../components/navbar/navbar";
import Button from '../../../../components/button/button';
import Bubble from "../../../../components/bubble/bubble";
import Heading from "../../../../components/info-hub/heading"
import Body from "./body";

export default function Step3() {
    var itemOne = {
        type: "paragraph",
        content: "If we think that your project idea might be a good fit, we will ask you for more information. A form  you can use is attached at the end of this document. Whether or not you use the form, please include: "
    };

    var itemTwo = {
        type: "bullet-point",
        content: "Project leader's name, address, phone, and (if available) email"
    };

    var textList = [itemOne, itemTwo]

    return (
        <div>
            <Navbar/>
            <div className="page-wrapper">
                <Heading text="Step 3" buttonText="edit"/>

                <div>
                    <Body textList={textList} title="Step 3: Send Us Detailed Information"/>
                </div>

                <div className="button-wrapper">
                    <Button color="blue" size="small" text="back"/>
                    <Button color="blue" size="small" text="next"/>
                </div>
            </div>
        </div>
    );
}