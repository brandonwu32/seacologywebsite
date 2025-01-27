'use client'

import styles from "../page.css"
import Navbar from "../../components/navbar/navbar";
import Button from '../../components/button/button';
import Bubble from "../../components/bubble/bubble";
import Heading from "../../components/info-hub/heading"
import Body from "../../components/info-hub/pages/project-management/body";
import Link from "next/link"
import { fetchStep1 } from "../../lib/data";
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from "react";

export default function Step1() {

    const [textList, setTextList] = useState([])
    const searchParams = useSearchParams();
    let sesh = searchParams.get("session");

    useEffect(() => {
        const text = async () => {
        try {
            const result = await fetchStep1();
            setTextList(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        };

        text()
    }, []);
    return (
        <div>
            <div className="navbar-div">
                <Navbar/>
            </div>
            <div className="page-wrapper">
                <Heading text="Step 1" buttonText="edit"/>
                <div>
                    <Body textList={textList} title="Step 1: Find a New Project"/>
                </div>
                <Suspense>
                <div className="step1-row1-wrapper">
                    <div className="link-bubble-wrapper">
                        <Link href={"/projectmanagement/identifyingproj?session="+sesh}>
                            <Bubble midtext="Identifying Good Seacology Projects" width={'16rem'} height={'16rem'}/>
                        </Link>
                    </div>
                    <div className="link-bubble-wrapper">
                        <Link href={"/projectmanagement/newprojproposal?session="+sesh}>
                            <Bubble midtext="New Project Proposal Conversation" width={'16rem'} height={'16rem'}/>
                        </Link>
                    </div>
                </div>

                <div className="button-wrapper">
                    <Link href={"/projectmanagement/step2?session="+sesh}>
                        <Button color="blue" size="small" text="next"/>
                    </Link>
                </div>
                </Suspense>
            </div>
        </div>
    );
}