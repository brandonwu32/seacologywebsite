'use server'

import styles from "../page.css"
import Navbar from "../../components/navbar/navbar";
import Button from '../../components/button/button';
import Bubble from "../../components/bubble/bubble";
import Heading from "../../components/info-hub/heading"
import Body from "../../components/info-hub/pages/project-management/body";
import Link from "next/link"
import { fetchStep4 } from "../../lib/data";


export default async function Step4() {

    var textList = await fetchStep4();

    return (
        <div>
            <Navbar/>
            <div className="page-wrapper">
                <Heading text="Step 4" buttonText="edit"/>

                <div>
                    <Body textList={textList} title="After Approval Get Conservation and Grant Agreements Signed"/>
                </div>

                <div className="button-wrapper">
                    <Link href="/projectmanagement/step3">
                        <Button color="blue" size="small" text="back"/>
                    </Link>

                    <Link href="/projectmanagement/step5">
                        <Button color="blue" size="small" text="next"/>
                    </Link>
                </div>

            </div>

        </div>





    );
}