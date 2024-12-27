"use server"

import styles from "../page.css"
import Navbar from "../../components/navbar/navbar";
import Button from '../../components/button/button';
import Heading from "../../components/info-hub/heading"
import Body from "../../components/info-hub/pages/project-management/bodyAdmin";
import Link from "next/link"
import { fetchGuidelinesPage } from "../../lib/data"

export default async function Contact() {

var textList = await fetchGuidelinesPage();


return (
    <div>
        <Navbar/>
        <div className="page-wrapper">
            <Heading text="Contacts" buttonText="Editing" edit ={true}/>

            <div>
                <Body textList={textList} title="Who to Contact at Seacology"/>
            </div>

            <div className="button-wrapper">
                <Link href="/admin/finances">
                <Button color="blue" size="small" text="back"/>
                </Link>

            </div>

        </div>

    </div>
);
}