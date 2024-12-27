'use server'

import styles from "../../page.css"
import Navbar from "../../../components/navbar/navbar";
import Button from '../../../components/button/button';
import Bubble from "../../../components/bubble/bubble";
import Heading from "../../../components/info-hub/heading"
import Body from "../../../components/info-hub/pages/project-management/bodyAdmin";
import Link from "next/link"
import { fetchGuidelinesPage } from "../../../lib/data"

export default async function PM_Overview() {


    var textList = await fetchGuidelinesPage();

    return (
        <div>
            <Navbar/>
            <div className="page-wrapper">
                <Heading text="Project Management" buttonText = 'Editing' edit ={true}/>

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