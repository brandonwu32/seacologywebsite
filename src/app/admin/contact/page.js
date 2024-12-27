"use client"

import styles from "../page.css"
import Navbar from "../../components/navbar/navbar";
import Button from '../../components/button/button';
import Heading from "../../components/info-hub/heading"
import Body from "../../components/info-hub/pages/project-management/body";
import Link from "next/link"
import { fetchGuidelinesPage } from "../../lib/data"
import { useState, useEffect } from 'react';

export default function Contact() {
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
            <Heading text="Contacts" buttonText="Editing" edit ={true}/>

            <div>
                <Body textList={textList} title="Who to Contact at Seacology"/>
            </div>

            <div className="button-wrapper">
                <Link href="/admin/finances">
                    <Button color="blue" size="small" text="back"/>
                </Link>

            </div>

        </div>

    </div>
);
}