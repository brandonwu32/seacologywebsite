"use server"

import styles from "../../page.css"
import Navbar from "../../../components/navbar/navbar";
import Button from '../../../components/button/button';
import Heading from "../../../components/info-hub/heading"
import Body from "../../../components/info-hub/pages/project-management/bodyAdmin";
import Link from "next/link"
import { fetchGuidelinesPage } from "../../../lib/data"

export default async function Identifying() {

    var textList = await fetchGuidelinesPage();

    return (
        <div>
            <Navbar/>
            <div className="page-wrapper">
                <Heading text="Identifying Projects" buttonText="Editing" edit ={true}/>

                <div>
                    <Body textList={textList} title="Identifying Good Seacology Projects"/>
                </div>

                <div className="button-wrapper">
                    <Link href="/admin/projectmanagement/step1">
                        <Button color="blue" size="small" text="back"/>
                    </Link>

                    <Link href="/admin/projectmanagement/newprojproposal">
                        <Button color="blue" size="small" text="next"/>
                    </Link>
                </div>
            </div>
        </div>
    );
}