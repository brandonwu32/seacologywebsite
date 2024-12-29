'use client'

import styles from "../../page.css"
import Navbar from "../../../components/navbar/navbar";
import Button from '../../../components/button/button';
import Heading from "../../../components/info-hub/heading"
import Body from "../../../components/info-hub/pages/project-management/bodyAdmin";
import Link from "next/link"
import { fetchStep2 } from "../../../lib/data";
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';



export default function Step2() {

    const [textList, setTextList] = useState([])
    const searchParams = useSearchParams();
    let sesh = searchParams.get("session");

    useEffect(() => {
        const text = async () => {
        try {
            const result = await fetchStep2();
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
                <Heading text="Step 2" buttonText="Editing" edit ={true}/>

                <div>
                    <Body textList={textList} title="Step 2: Send Us the Idea"/>
                </div>

                <div className="button-wrapper">
                    <Link href={"/admin/projectmanagement/step1?session="+sesh}>
                        <Button color="blue" size="small" text="back"/>
                    </Link>

                    <Link href={"/admin/projectmanagement/step3?session="+sesh}>
                        <Button color="blue" size="small" text="next"/>
                    </Link>
                </div>
            </div>
        </div>
    );
}