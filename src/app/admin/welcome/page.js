'use client'

import styles from "../page.css"
import Navbar from "../../components/navbar/navbar";
import Button from '../../components/button/button';
import Bubble from "../../components/bubble/bubble";
import Heading from "../../components/info-hub/heading"
import Link from "next/link"

export default function Welcome() {
    return (
        <div>
            <Navbar/>
            <div className="page-wrapper">
                <Heading text="Welcome" buttonText = 'edit' edit ={true}/>

                <div className="welcome-wrapper">
                    <div className="link-bubble-wrapper">
                        <Link href="/guidelines">
                            <Bubble className="welcome-bubble" heading="Guidelines" width={'20rem'} height={'20rem'}/>
                        </Link>
                    </div>
                    <div className="link-bubble-wrapper">
                        <Link href="/projectmanagement/pm-overview">
                            <Bubble className="welcome-bubble" heading="Project Management" width={'20rem'} height={'20rem'}/>
                        </Link>
                    </div>
                </div>

                <div className="welcome-wrapper">
                    <div className="link-bubble-wrapper">
                        <Link href="/finances">
                            <Bubble className="welcome-bubble" heading="Financial" width={'20rem'} height={'20rem'}/>
                        </Link>
                    </div>
                    <div className="link-bubble-wrapper">
                        <Link href="/contact">
                            <Bubble className="welcome-bubble" heading="Contact" width={'20rem'} height={'20rem'}/>
                        </Link>
                    </div>
                </div>

                <div className="button-wrapper">
                    <Link href="">
                        <Button color="blue" size="small" text="back"/>
                    </Link>
                    <Link href="/admin/guidelines">
                        <Button color="blue" size="small" text="next"/>
                    </Link>
                </div>
            </div>
        </div>
    );
}