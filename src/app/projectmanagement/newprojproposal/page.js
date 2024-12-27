"use client"

import styles from "../page.css"
import Navbar from "../../components/navbar/navbar";
import Button from '../../components/button/button';
import Heading from "../../components/info-hub/heading"
import Body from "../../components/info-hub/pages/project-management/body";
import Link from "next/link"
import { fetchNewprojproposal } from "../../lib/data";
import { useState, useEffect } from 'react';

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
                <Heading text="New Project Proposal" buttonText="edit"/>

                <div>
                    <Body textList={textList} title="New Project Proposal Conversation"/>
                </div>

                <div className="button-wrapper">
                    <Link href="/projectmanagement/step1">
                        <Button color="blue" size="small" text="back"/>
                    </Link>

                    <Link href="/projectmanagement/step2">
                        <Button color="blue" size="small" text="next"/>
                    </Link>
                </div>
            </div>
        </div>
    );
}