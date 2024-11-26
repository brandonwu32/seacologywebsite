'use server'

import styles from "../../page.css"
import Navbar from "../../../components/navbar/navbar";
import Button from '../../../components/button/button';
import Heading from "../../../components/info-hub/heading"
import Body from "../../../components/info-hub/pages/project-management/body";
import Link from "next/link"
import { fetchGuidelinesPage } from "../../../lib/data"

export default async function Step6() {
    
    var textList = await fetchGuidelinesPage();

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