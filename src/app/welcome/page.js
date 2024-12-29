'use client'


import Bubble from "../components/bubble/bubble"
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import Navbar from "../components/navbar/navbar";
import Heading from "../components/info-hub/heading"
import Link from "next/link"
import styles from './page.css'

export default function Welcome() {
    const [authentication, setAuthentication] = useState((false, false));
    const searchParams = useSearchParams();
    let sesh = searchParams.get("session");
        return (
            <div>
                <Navbar/>
                <div className="page-wrapper">
                    <Heading text="Welcome" buttonText = 'edit'/>

                    <div className="welcome-wrapper">
                    <Suspense>

                        <div className="link-bubble-wrapper">
                            <Link href={"/guidelines?session="+sesh} >
                                <Bubble className="welcome-bubble" heading="Guidelines" width={'20rem'} height={'20rem'}/>
                            </Link>
                        </div>
                        <div className="link-bubble-wrapper">
                            <Link href={"/projectmanagement/pm-overview?session="+sesh} >
                                <Bubble className="welcome-bubble" heading="Project Management" width={'20rem'} height={'20rem'}/>
                            </Link>
                        </div>
                        </Suspense>

                    </div>

                    <div className="welcome-wrapper">
                    <Suspense>

                        <div className="link-bubble-wrapper">

                            <Link href={"/financial?session="+sesh} >
                                <Bubble className="welcome-bubble" heading="Financial" width={'20rem'} height={'20rem'}/>
                            </Link>
                        </div>
                        <div className="link-bubble-wrapper">
                            <Link href={"/contact?session="+sesh} >
                                <Bubble className="welcome-bubble" heading="Contact" width={'20rem'} height={'20rem'}/>
                            </Link>
                        </div>
                        </Suspense>

                    </div>

                </div>

              </div>

        );
  }