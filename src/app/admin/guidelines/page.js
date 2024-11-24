"use server"

import styles from "../page.css"
import Navbar from "../../components/navbar/navbar";
import Button from '../../components/button/button';
import Bubble from "../../components/bubble/bubble";
import Heading from "../../components/info-hub/heading"
import Body from "../../components/info-hub/pages/project-management/body";
import Link from "next/link"
import { fetchGuidelinesPage } from "../../lib/data"

export default async function Guidelines() {

    var textList = await fetchGuidelinesPage();

    return (
        <div>
            <Navbar/>
            <div className="page-wrapper">
                <Heading text="Guidelines" buttonText = 'Editing' edit ={true}/>

                <div>
                    <Body textList={textList} title="Guidelines for Working With Seacology"/>
                </div>

                <div className="button-wrapper">
                    <Link href="/welcome">
                        <Button color="blue" size="small" text="back"/>
                    </Link>

                    <Link href="/admin/projectmanagement/pm-overview">
                        <Button color="blue" size="small" text="next"/>
                    </Link>
                </div>
            </div>
        </div>
    );
}