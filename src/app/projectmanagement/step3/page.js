'use client'

import styles from "../page.css"
import Navbar from "../../components/navbar/navbar";
import Button from '../../components/button/button';
import Heading from "../../components/info-hub/heading"
import Body from "../../components/info-hub/pages/project-management/body";
import Link from "next/link"
import { fetchStep3 } from "../../lib/data";
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from "react";

export default function Step3() {

    const [textList, setTextList] = useState([])
    const searchParams = useSearchParams();
    let sesh = searchParams.get("session");

    useEffect(() => {
        const text = async () => {
        try {
            const result = await fetchStep3();
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
                <Heading text="Step 3" buttonText="edit"/>

                <div>
                    <Body textList={textList} title="Step 3: Send Us Detailed Information"/>
                </div>

                <div className="button-wrapper">
                <Suspense>

                    <Link href={"/projectmanagement/step2?session="+sesh}>
                        <Button color="blue" size="small" text="back"/>
                    </Link>

                    <Link href={"/projectmanagement/step4?session="+sesh}>
                        <Button color="blue" size="small" text="next"/>
                    </Link>
                    </Suspense>

                </div>
            </div>
        </div>
    );
}