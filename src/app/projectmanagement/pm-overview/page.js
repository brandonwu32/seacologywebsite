"use client"

import styles from "../page.css"
import Navbar from "../../components/navbar/navbar";
import Button from '../../components/button/button';
import Bubble from "../../components/bubble/bubble";
import Heading from "../../components/info-hub/heading"
import Body from "../../components/info-hub/pages/project-management/body";
import Link from "next/link"
import { fetchOverview } from '../../lib/data'
import { useState, useEffect } from 'react';


export default function PM_Overview() {
    const [textList, setTextList] = useState([])


    useEffect(() => {
        const text = async () => {
        try {
            const result = await fetchGuidelinesPage();
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
                <Heading text="Project Management" buttonText = 'edit'/>

                <div>
                    <Body textList={textList} title="Project Management Life Cycle"/>
                </div>

                <div className="welcome-wrapper">
                    <div className="link-bubble-wrapper">
                        <Link href="/projectmanagement/step1">
                            <Bubble midtext="Step 1. Find a New Project" width={'15rem'} height={'15rem'}/>
                        </Link>
                    </div>
                    <div className="link-bubble-wrapper">
                        <Link href="/projectmanagement/step2">
                            <Bubble midtext="Step 2. Find a New Project" width={'15rem'} height={'15rem'}/>
                        </Link>
                    </div>
                    <div className="link-bubble-wrapper">
                        <Link href="/projectmanagement/step3">
                            <Bubble midtext="Step 3. Find a New Project" width={'15rem'} height={'15rem'}/>
                        </Link>
                    </div>
                </div>

                <div className="welcome-wrapper">
                    <div className="link-bubble-wrapper">
                        <Link href="/projectmanagement/step4">
                            <Bubble midtext="Step 4. Get Agreements Signed" width={'15rem'} height={'15rem'}/>
                        </Link>
                    </div>
                    <div className="link-bubble-wrapper">
                        <Link href="/projectmanagement/step5">
                            <Bubble midtext="Step 5. Review and Send Reports" width={'15rem'} height={'15rem'}/>
                        </Link>
                    </div>
                    <div className="link-bubble-wrapper">
                        <Link href="/projectmanagement/step6">
                            <Bubble midtext="Step 6. Submit the Final Report" width={'15rem'} height={'15rem'}/>
                        </Link>
                    </div>
                </div>

                <div className="button-wrapper">
                    <Link href="/welcome">
                        <Button color="blue" size="small" text="back"/>
                    </Link>

                    <Link href="/projectmanagement/step1">
                        <Button color="blue" size="small" text="next"/>
                    </Link>
                </div>
            </div>
        </div>
    );
}