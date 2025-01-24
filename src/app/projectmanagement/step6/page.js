'use client'

import styles from "../page.css"
import Navbar from "../../components/navbar/navbar";
import Button from '../../components/button/button';
import Heading from "../../components/info-hub/heading"
import Body from "../../components/info-hub/pages/project-management/body";
import Link from "next/link"
import { fetchStep6 } from "../../lib/data";
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from "react";


export default function Step6() {

    const [textList, setTextList] = useState([])
    const searchParams = useSearchParams();
    let sesh = searchParams.get("session");

    useEffect(() => {
        const text = async () => {
        try {
            const result = await fetchStep6();
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
                <Heading text="Step 6" buttonText="edit"/>

                <div>
                    <Body textList={textList} title="Submit the Final Report"/>
                </div>

                <div className="button-wrapper">
                <Suspense>

                    <Link href={"/projectmanagement/step5?session="+sesh}>
                        <Button color="blue" size="small" text="back"/>
                    </Link>
                    </Suspense>

                </div>

            </div>

        </div>



    );
}