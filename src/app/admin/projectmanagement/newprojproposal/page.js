"use client"

import styles from "../../page.css"
import Navbar from "../../../components/navbar/navbar";
import Button from '../../../components/button/button';
import Heading from "../../../components/info-hub/heading"
import Body from "../../../components/info-hub/pages/project-management/body";
import Link from "next/link"
import { fetchGuidelinesPage } from "../../../lib/data";
import { useEffect, useState } from 'react';

export default function Identifying() {
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
                <Heading text="New Project Proposal" buttonText="editing" edit ={true}/>

                <div>
                    <Body textList={textList} title="New Project Proposal Conversation"/>
                </div>

                <div className="button-wrapper">
                    <Link href="/admin/projectmanagement/step1">
                        <Button color="blue" size="small" text="back"/>
                    </Link>

                    <Link href="/admin/projectmanagement/step2">
                        <Button color="blue" size="small" text="next"/>
                    </Link>
                </div>
            </div>
        </div>
    );
}