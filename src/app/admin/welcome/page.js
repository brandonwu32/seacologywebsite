'use client'

import styles from "../page.css"
import Navbar from "../../components/navbar/navbar";
import Button from '../../components/button/button';
import Bubble from "../../components/bubble/bubble";
import Heading from "../../components/info-hub/heading"
import Link from "next/link"
import { useSearchParams } from 'next/navigation';
import { Suspense } from "react";

export default function Welcome() {
    const searchParams = useSearchParams();
    let sesh = searchParams.get("session");
    return (
        <div>
            <Navbar/>
            <div className="page-wrapper">
                <Heading text="Welcome" buttonText = 'Editing' edit ={true}/>

                <div className="welcome-wrapper">
                    <Suspense>
                        <div className="link-bubble-wrapper">
                            <Link href={"/guidelines?session="+sesh}>
                                <Bubble className="welcome-bubble" heading="Guidelines" width={'20rem'} height={'20rem'}/>
                            </Link>
                        </div>
                        <div className="link-bubble-wrapper">
                            <Link href={"/projectmanagement/pm-overview?session="+sesh}>
                                <Bubble className="welcome-bubble" heading="Project Management" width={'20rem'} height={'20rem'}/>
                            </Link>
                        </div>
                    </Suspense>
                </div>

                <div className="welcome-wrapper">
                    <Suspense>
                        <div className="link-bubble-wrapper">
                            <Link href={"/financial?session="+sesh}>
                                <Bubble className="welcome-bubble" heading="Financial" width={'20rem'} height={'20rem'}/>
                            </Link>
                        </div>
                        <div className="link-bubble-wrapper">
                            <Link href={"/contact?session="+sesh}>
                                <Bubble className="welcome-bubble" heading="Contact" width={'20rem'} height={'20rem'}/>
                            </Link>
                        </div>
                    </Suspense>
                </div>

                <div className="button-wrapper">
                    <Button color="blue" size="small" text="back"/>
                    <Suspense>
                        <Link href={"/guidelines?session="+sesh}>
                            <Button color="blue" size="small" text="next"/>
                        </Link>
                    </Suspense>
                </div>
            </div>
        </div>
    );
}