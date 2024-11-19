'use client'

import styles from "../../page.css"
import Navbar from "../../../components/navbar/navbar";
import Button from '../../../components/button/button';
import Heading from "../../../components/info-hub/heading"
import Body from "../../../components/info-hub/pages/project-management/body";
import Link from "next/link"

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

    return (
        <div>
            <Navbar/>
            <div className="page-wrapper">
                <Heading text="Step 2" buttonText="edit" edit ={true}/>

                <div>
                    <Body textList={textList} title="Step 2: Send Us the Idea"/>
                </div>

                <div className="button-wrapper">
                    <Link href="/projectmanagement/step1">
                        <Button color="blue" size="small" text="back"/>
                    </Link>

                    <Link href="/projectmanagement/step3">
                        <Button color="blue" size="small" text="next"/>
                    </Link>
                </div>
            </div>
        </div>
    );
}