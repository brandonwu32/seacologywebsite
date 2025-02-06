"use client"

import styles from "../../page.css"
import Navbar from "../../../components/navbar/navbar";
import Button from '../../../components/button/button';
import Heading from "../../../components/info-hub/heading"
import Body from "../../../components/info-hub/pages/project-management/bodyAdmin";
import Link from "next/link"
import { fetchNewprojproposal } from "../../../lib/data";
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from "react";

export default function Identifying() {
    const [textList, setTextList] = useState([])
    const searchParams = useSearchParams();
    let sesh = searchParams.get("session");

    useEffect(() => {
        const text = async () => {
        try {
            const result = await fetchNewprojproposal();
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
                <Heading text="New Project Proposal" buttonText="Save" edit ={true}/>

                <div>
                    <Body textList={textList} title="New Project Proposal Conversation"/>
                </div>

                <div className="button-wrapper">
                <Suspense>
                    <Link href={"/admin/projectmanagement/step1?session="+sesh}>
                        <Button color="blue" size="small" text="back"/>
                    </Link>

                    <Link href={"/admin/projectmanagement/step2?session="+sesh}>
                        <Button color="blue" size="small" text="next"/>
                    </Link>
                    </Suspense>
                </div>
            </div>
        </div>
    );
}