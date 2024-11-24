'use client'

import styles from "../../page.css"
import Navbar from "../../../components/navbar/navbar";
import Button from '../../../components/button/button';
import Heading from "../../../components/info-hub/heading"
import Body from "../../../components/info-hub/pages/project-management/body";
import Link from "next/link"


export default function Step6() {
    var itemOne = {
        type: "paragraph",
        content:"If there is a ceremony to mark the completion of a project, attend if you can. We will reimburse your  travel expenses, if the Seacology program manager has authorized them before your trip."
    }
    var itemTwo = {
        type: "paragraph",
        content: "A final report is due from you or the partner NGO within three months after the project is complete.  If you believe this deadline will not be met, inform Seacology staff as soon as you can. Like previous  progress reports, the final report must include a narrative report on the completed project and  conservation area and photos. It must also include a final financial report of how all Seacology grant  funds were spent, including a comparison of actual expenditures to the original budget. We may  request line-item detail and receipts."
    }
    var itemThree = {
        type: "paragraph",
        content: "If the project was finished under budget, talk to us about what to do with the leftover funds. "
    }
    

    var textList = [itemOne, itemTwo, itemThree ]


    return (
        <div>
            <Navbar/>
            <div className="page-wrapper">
                <Heading text="Step 6" buttonText="Editing" edit ={true}/>

                <div>
                    <Body textList={textList} title="Submit the Final Report"/>
                </div>

                <div className="button-wrapper">
                    <Link href="/admin/projectmanagement/step5">
                        <Button color="blue" size="small" text="back"/>
                    </Link>

                    <Link href="/admin/finances">
                        <Button color="blue" size="small" text="next"/>
                    </Link>
                </div>

            </div>

        </div>



    );
}