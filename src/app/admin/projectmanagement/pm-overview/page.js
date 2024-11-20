'use client'

import styles from "../../page.css"
import Navbar from "../../../components/navbar/navbar";
import Button from '../../../components/button/button';
import Bubble from "../../../components/bubble/bubble";
import Heading from "../../../components/info-hub/heading"
import Body from "../../../components/info-hub/pages/project-management/body";
import Link from "next/link"


export default function PM_Overview() {
    var itemOne = {
        type: "paragraph",
        content: "Your contract with Seacology states how many project recommendations you are required to submit each year. See the project management cycle at the bottom of the page."
    }

    var itemTwo = {
        type: "header",
        content: "Here is an overview of the process. Each step is discussed in more detail below. "
    }

    var itemThree = {
        type: "paragraph",
        content: "1. Research. You talk to communities and NGOs to look for promising projects."
    }

    var itemFour = {
        type: "paragraph",
        content: "2. Recommendation. You send us a very brief description of the project idea and any potential  conflicts of interest. "
    }

    var itemFive = {
        type: "paragraph",
        content: "3. Proposal. If we are interested, we ask for details—who, what, where, when, and how much money  it will cost. We then prepare a one-page proposal, with a map and photos, for Seacology’s Board of  Directors."
    }

    var itemSix = {
        type: "paragraph",
        content: "4. Approval. The board votes on new proposals twice a year, usually in February and June. If the  board approves the project, we send you agreements setting out the terms of the grant. Once those  agreements are signed, we can send the first installment of the grant. "
    }

    var itemSeven = {
        type: "paragraph",
        content: "5. Reporting. You monitor the project, both remotely and through site visits, and keep Seacology  staff informed about progress and problems. We ask you for a brief update before each board  meeting (twice a year) and whenever you request a grant payment from us. "
    }

    var itemEight = {
        type: "paragraph",
        content: "6. Final Report. Within three months after the project is complete, you or the partner NGO submit a final report. "
    }

    var textList = [
        itemOne, itemTwo, itemThree, itemFour, itemFive, itemSix, itemSeven, itemEight
    ]

    return (
        <div>
            <Navbar/>
            <div className="page-wrapper">
                <Heading text="Project Management" buttonText = 'edit' edit ={true}/>

                <div>
                    <Body textList={textList} title="Project Management Life Cycle"/>
                </div>

                <div className="welcome-wrapper">
                    <div className="link-bubble-wrapper">
                        <Link href="/admin/projectmanagement/step1">
                            <Bubble midtext="Step 1. Find a New Project" width={'15rem'} height={'15rem'}/>
                        </Link>
                    </div>
                    <div className="link-bubble-wrapper">
                        <Link href="/admin/projectmanagement/step2">
                            <Bubble midtext="Step 2. Find a New Project" width={'15rem'} height={'15rem'}/>
                        </Link>
                    </div>
                    <div className="link-bubble-wrapper">
                        <Link href="/admin/projectmanagement/step3">
                            <Bubble midtext="Step 3. Find a New Project" width={'15rem'} height={'15rem'}/>
                        </Link>
                    </div>
                </div>

                <div className="welcome-wrapper">
                    <div className="link-bubble-wrapper">
                        <Link href="/admin/projectmanagement/step4">
                            <Bubble midtext="Step 4. Get Agreements Signed" width={'15rem'} height={'15rem'}/>
                        </Link>
                    </div>
                    <div className="link-bubble-wrapper">
                        <Link href="/admin/projectmanagement/step5">
                            <Bubble midtext="Step 5. Review and Send Reports" width={'15rem'} height={'15rem'}/>
                        </Link>
                    </div>
                    <div className="link-bubble-wrapper">
                        <Link href="/admin/projectmanagement/step6">
                            <Bubble midtext="Step 6. Submit the Final Report" width={'15rem'} height={'15rem'}/>
                        </Link>
                    </div>
                </div>

                <div className="button-wrapper">
                    <Link href="/admin/welcome">
                        <Button color="blue" size="small" text="back"/>
                    </Link>

                    <Link href="/admin/projectmanagement/step1">
                        <Button color="blue" size="small" text="next"/>
                    </Link>
                </div>
            </div>
        </div>
    );
}