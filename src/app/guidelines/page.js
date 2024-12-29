'use client'


import styles from "./page.css"
import Navbar from "../components/navbar/navbar";
import Button from '../components/button/button';
import Heading from "../components/info-hub/heading"
import Body from "../components/info-hub/pages/project-management/body";
import Link from "next/link";
import { fetchGuidelinesPage } from "../lib/data";
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function Guidelines() {

    const [textList, setTextList] = useState([])
    const searchParams = useSearchParams();
    let sesh = searchParams.get("session");

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
                <Heading text="Guidelines" buttonText = 'edit'/>
                <div>
                    <Body textList={textList} title="Guidelines for Working With Seacology"/>
                </div>

                <div className="button-wrapper">
                    <Suspense>

                        <Link href={"/welcome?session="+sesh}>
                            <Button color="blue" size="small" text="back"/>
                        </Link>

                        <Link href="/projectmanagement/pm-overview">
                            <Button color="blue" size="small" text="next"/>
                        </Link>
                    </Suspense>
                </div>
            </div>
        </div>
    );
}