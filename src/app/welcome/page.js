'use client'
import Bubble from "../components/bubble/bubble"

import styles from "./page.css"
import Image from "next/image";
import Navbar from "../components/navbar/navbar";
import Button from '../components/button/button';
import Heading from "../components/info-hub/heading"
import Link from "next/link"
import logo from '/assets/seacology_logo.png';

export default function Welcome() {
    return (
        <div>
            <Navbar/>
            <div className="page-wrapper">
                <Heading text="Welcome" buttonText = 'edit'/>

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
                        <Link href="/financial">
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

                    <Link href="/guidelines">
                        <Button color="blue" size="small" text="next"/>
                    </Link>
                </div>
            </div>
          </div>
    )
  }
{/*
export default function Home() {
  return (
    <div className="page">
      <div className="image-container">
      <Image src={logo} alt="Seacology Logo" />
      </div>
      <div className="main-content">
        <div className="top-bar">
          <div className = "login-area"></div>
          <Button color = "blue" size = "large" text = "Log in"/>
        </div>
    );
}
        <div className = "bottom-bar"> </div>
      <div className="button-bar">
        <Button color="blue" size = "large" text = "Submit Update"/>
        <Button color="blue" size = "large" text = "Info Hub"/>
        <Button color="blue" size="large" text="White Pages" />
      </div>

      </div>
    </div> */}