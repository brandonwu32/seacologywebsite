'use client'

import styles from "../../page.css"
import Navbar from "../../../components/navbar/navbar";
import Button from '../../../components/button/button';
import Bubble from "../../../components/bubble/bubble";
import Heading from "../../../components/info-hub/heading"
import Body from "../../../components/info-hub/pages/project-management/body";
import Link from "next/link"
import { fetchStep4 } from "../../../lib/data";
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function Step4() {

    const searchParams = useSearchParams();
    let sesh = searchParams.get("session");
    const [textList, setTextList] = useState([])


    useEffect(() => {
        const text = async () => {
        try {
            const result = await fetchStep4();
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
                <Heading text="Step 4" buttonText="Editing" edit ={true}/>

                <div>
                    <Body textList={textList} title="After Approval Get Conservation and Grant Agreements Signed"/>
                </div>

                <div className="button-wrapper">
                    <Link href={"/admin/projectmanagement/step3?session="+sesh}>
                        <Button color="blue" size="small" text="back"/>
                    </Link>

                    <Link href={"/admin/projectmanagement/step5?session="+sesh}>
                        <Button color="blue" size="small" text="next"/>
                    </Link>
                </div>

            </div>

        </div>





    );
}