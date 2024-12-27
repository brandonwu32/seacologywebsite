'use client'

import styles from "../../page.css"
import Navbar from "../../../components/navbar/navbar";
import Button from '../../../components/button/button';
import Bubble from "../../../components/bubble/bubble";
import Heading from "../../../components/info-hub/heading"
import Body from "../../../components/info-hub/pages/project-management/body";
import Link from "next/link"
import { fetchOverview } from "../../../lib/data";
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function PM_Overview() {
    const [textList, setTextList] = useState([])
    const searchParams = useSearchParams();
    let sesh = searchParams.get("session");

    useEffect(() => {
        const text = async () => {
        try {
            const result = await fetchOverview();
            setTextList(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        };

        text()
    }, []);

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
                        <Link href={"/admin/projectmanagement/step1?session="+sesh}>
                            <Bubble midtext="Step 1. Find a New Project" width={'15rem'} height={'15rem'}/>
                        </Link>
                    </div>
                    <div className="link-bubble-wrapper">
                        <Link href={"/admin/projectmanagement/step2?session="+sesh}>
                            <Bubble midtext="Step 2. Find a New Project" width={'15rem'} height={'15rem'}/>
                        </Link>
                    </div>
                    <div className="link-bubble-wrapper">
                        <Link href={"/admin/projectmanagement/step3?session="+sesh}>
                            <Bubble midtext="Step 3. Find a New Project" width={'15rem'} height={'15rem'}/>
                        </Link>
                    </div>
                </div>

                <div className="welcome-wrapper">
                    <div className="link-bubble-wrapper">
                        <Link href={"/admin/projectmanagement/step4?session="+sesh}>
                            <Bubble midtext="Step 4. Get Agreements Signed" width={'15rem'} height={'15rem'}/>
                        </Link>
                    </div>
                    <div className="link-bubble-wrapper">
                        <Link href={"/admin/projectmanagement/step5?session="+sesh}>
                            <Bubble midtext="Step 5. Review and Send Reports" width={'15rem'} height={'15rem'}/>
                        </Link>
                    </div>
                    <div className="link-bubble-wrapper">
                        <Link href={"/admin/projectmanagement/step6?session="+sesh}>
                            <Bubble midtext="Step 6. Submit the Final Report" width={'15rem'} height={'15rem'}/>
                        </Link>
                    </div>
                </div>

                <div className="button-wrapper">
                    <Link href={"/admin/welcome?session="+sesh}>
                        <Button color="blue" size="small" text="back"/>
                    </Link>

                    <Link href={"/admin/projectmanagement/step1?session="+sesh}>
                        <Button color="blue" size="small" text="next"/>
                    </Link>
                </div>
            </div>
        </div>
    );
}