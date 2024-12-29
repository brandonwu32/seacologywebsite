'use client'

import styles from "./page.css"
import Navbar from "../components/navbar/navbar"
import Button from '../components/button/button';
import Heading from "../components/info-hub/heading"
import Body from "../components/info-hub/pages/project-management/body";
import Link from "next/link"
import { fetchFinances } from "../lib/data";
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';


export default function Finances() {

    const [textList, setTextList] = useState([])
    const searchParams = useSearchParams();
    let sesh = searchParams.get("session");

    useEffect(() => {
        const text = async () => {
        try {
            const result = await fetchFinances();
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
                <Heading text="Finances Info" buttonText="edit"/>

                <div>
                    <Body textList={textList} title=""/>
                </div>

                <div className="button-wrapper">
                    <Link href={"/projectmanagement/step6?session="+sesh}>
                        <Button color="blue" size="small" text="back"/>
                    </Link>

                    <Link href={"/contact?session="+sesh}>
                        <Button color="blue" size="small" text="next"/>
                    </Link>
                </div>

            </div>

        </div>



    );
}