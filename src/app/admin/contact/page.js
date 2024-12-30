"use client"

import styles from "../page.css"
import Navbar from "../../components/navbar/navbar";
import Button from '../../components/button/button';
import Heading from "../../components/info-hub/heading"
import Body from "../../components/info-hub/pages/project-management/bodyAdmin";
import Link from "next/link"
import { fetchContact } from "../../lib/data";
import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Suspense } from "react";

export default function Contact() {
    const [textList, setTextList] = useState([])
    const searchParams = useSearchParams();
    let sesh = searchParams.get("session");

    useEffect(() => {
        const text = async () => {
        try {
            const result = await fetchContact();
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
                <Suspense>
                    <Link href={"/admin/finances?session="+sesh}>
                        <Button color="blue" size="small" text="back"/>
                    </Link>
                </Suspense>
            </div>

        </div>

    </div>
);
}