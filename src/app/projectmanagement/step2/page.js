'use server'

import styles from "../page.css"
import Navbar from "../../components/navbar/navbar";
import Button from '../../components/button/button';
import Heading from "../../components/info-hub/heading"
import Body from "../../components/info-hub/pages/project-management/body";
import Link from "next/link"
import { fetchStep2 } from "../../lib/data";

export default async function Step2() {

    var textList = await fetchStep2();

    return (
        <div>
            <Navbar/>
            <div className="page-wrapper">
                <Heading text="Step 2" buttonText="edit"/>

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