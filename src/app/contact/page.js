"use server"

import styles from "./page.css"
import Navbar from "../components/navbar/navbar";
import Button from '../components/button/button';
import Heading from "../components/info-hub/heading"
import Body from "../components/info-hub/pages/project-management/body";
import Link from "next/link"
import { fetchContact } from "../lib/data";


export default async function Contacts() {

var textList = await fetchContact();

return (
    <div>
        <Navbar/>
        <div className="page-wrapper">
            <Heading text="Contacts" buttonText="edit" />

            <div>
                <Body textList={textList} title="Who to Contact at Seacology"/>
            </div>

            <div className="button-wrapper">
                <Link href="/finances">
                <Button color="blue" size="small" text="back"/>
                </Link>
            </div>

        </div>

    </div>
);
}