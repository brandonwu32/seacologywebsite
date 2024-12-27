"use client"

import styles from "../../page.css"
import Navbar from "../../../components/navbar/navbar";
import Button from '../../../components/button/button';
import Heading from "../../../components/info-hub/heading"
import Body from "../../../components/info-hub/pages/project-management/body";
import Link from "next/link"
import { fetchProjects } from "../../../lib/data";
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function Identifying() {

    const [textList, setTextList] = useState([])
    const searchParams = useSearchParams();
    let sesh = searchParams.get("session");

    useEffect(() => {
        const text = async () => {
        try {
            const result = await fetchProjects();
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
                <Heading text="Identifying Projects" buttonText="Editing" edit ={true}/>

                <div>
                    <Body textList={textList} title="Identifying Good Seacology Projects"/>
                </div>

                <div className="button-wrapper">
                    <Link href={"/admin/projectmanagement/step1?session="+sesh}>
                        <Button color="blue" size="small" text="back"/>
                    </Link>

                    <Link href={"/admin/projectmanagement/newprojproposal?session="+sesh}>
                        <Button color="blue" size="small" text="next"/>
                    </Link>
                </div>
            </div>
        </div>
    );
}