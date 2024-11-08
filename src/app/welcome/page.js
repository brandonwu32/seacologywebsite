'use client'

import styles from "./page.css"
import Navbar from "../components/navbar/navbar";
import Button from '../components/button/button';
import Bubble from "../components/bubble/bubble";
import Heading from "../components/info-hub/heading"
import Body from "../components/info-hub/pages/project-management/body";
import Link from "next/link"

export default function Welcome() {
    return (
        <div>
            <Navbar/>
            <div className="page-wrapper">
                <Heading text="Welcome" buttonText = 'edit'/>

                <div className="welcome-wrapper">
                    <Bubble className="welcome-bubble" heading="Guidelines" width={'20rem'} height={'20rem'}/>
                    <Bubble className="welcome-bubble" heading="Project Management" width={'20rem'} height={'20rem'}/>
                </div>

                <div className="welcome-wrapper">
                    <Bubble className="welcome-bubble" heading="Financial" width={'20rem'} height={'20rem'}/>
                    <Bubble className="welcome-bubble" heading="Contact" width={'20rem'} height={'20rem'}/>                
                </div>
                
                <div className="button-wrapper">
                    <Link href="">
                        <Button color="blue" size="small" text="back"/>
                    </Link>
                    
                    <Link href="/projectmanagement">
                        <Button color="blue" size="small" text="next"/>
                    </Link>
                </div>
            </div>
        </div>
    );
}