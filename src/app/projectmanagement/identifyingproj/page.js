"use server"

import styles from "../page.css"
import Navbar from "../../components/navbar/navbar";
import Button from '../../components/button/button';
import Heading from "../../components/info-hub/heading"
import Body from "../../components/info-hub/pages/project-management/body";
import Link from "next/link"
import { fetchIdentifyingproj } from "../../lib/data";

export default async function Identifying() {
    var textList = await fetchIdentifyingproj();

    return (
        <div>
            <Navbar/>
            <div className="page-wrapper">
                <Heading text="Identifying Projects" buttonText="edit"/>

                <div>
                    <Body textList={textList} title="Identifying Good Seacology Projects"/>
                </div>

                <div className="button-wrapper">
                    <Link href="/projectmanagement/step1">
                        <Button color="blue" size="small" text="back"/>
                    </Link>

                    <Link href="/projectmanagement/newprojproposal">
                        <Button color="blue" size="small" text="next"/>
                    </Link>
                </div>
            </div>
        </div>
    );
}