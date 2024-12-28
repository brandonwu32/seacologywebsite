'use client'

import { useState } from 'react';
import '../navbar/Navbar.css';
import Image from "next/image";
import SeacologyLogo from "../../../../assets/seacology_logo.png";
<<<<<<< HEAD
import { useSearchParams } from 'next/navigation';
=======
import NavBarPopUp from '../navbarpopup/navbarpopup';
import Link from "next/link"

>>>>>>> 2a802456101bfe06ffd5c0c8eeb85f57c955b6d6

export default function Navbar() {

    // Define state to store search input
<<<<<<< HEAD
    const [searchQuery, setSearchQuery] = useState("");
    const searchParams = useSearchParams();
    let sesh = searchParams.get("session");
=======
    const [popupTrigger, setPopupTrigger] = useState(false)

    const togglePopUp = () => {
        setPopupTrigger(!popupTrigger);
      }

>>>>>>> 2a802456101bfe06ffd5c0c8eeb85f57c955b6d6
    // Handler for search input change

    return (
        <div id="wrapper">
            <NavBarPopUp trigger={popupTrigger} close={togglePopUp} name={"Search for Keywords in Guidelines"}/>
            <div id="navbar-wrapper">
                <div className="img-with-text">
                    <Link href={"/welcome?session="+sesh}>
                        <Image src={SeacologyLogo} id='seacology-logo' alt=''/>
                    </Link>
                </div>
                <div className="navbar">
                    <div className="navbar-link">
                        <div className="search-container">
                            <span className="search-icon">🔍</span>
                            <button id="search-bar" onClick={() => togglePopUp()}></button>
                        </div>
                    </div>

                    <div className="navbar-link">
                        <Link href={"/guidelines?session="+sesh} className="navbar-link">Guidelines</Link>
                    </div>

                    <div className="navbar-link">
                        <Link href={"/projectmanagement/pm-overview?session="+sesh} className="navbar-link">Project Management</Link>
                        <div className="dropdown">
                            <Link href={"/projectmanagement/pm-overview?session="+sesh}>Overview</Link>
                            <Link href={"/projectmanagement/step1?session="+sesh}>Step 1</Link>
                            <Link href={"/projectmanagement/step2?session="+sesh}>Step 2</Link>
                            <Link href={"/projectmanagement/step3?session="+sesh}>Step 3</Link>
                            <Link href={"/projectmanagement/step4?session="+sesh}>Step 4</Link>
                            <Link href={"/projectmanagement/step5?session="+sesh}>Step 5</Link>
                            <Link href={"/projectmanagement/step6?session="+sesh}>Step 6</Link>
                        </div>
                    </div>

                    <div className="navbar-link">
                        <a className="navbar-link">Status Updates</a>
                            <div className="dropdown">
                                <Link href={"/forms/conservationagreement?session="+sesh}>Conservation Agreement</Link>
                                <Link href={"/forms/finalprojectreport?session="+sesh}>Final Project Report</Link>
                                <Link href={"/forms/grantagreementform?session="+sesh}>Grant Agreement</Link>
                                <Link href={"/forms/projectprogressreport?session="+sesh}>Project Progress Report</Link>
                                <Link href={"/forms/projectproposalform?session="+sesh}>Project Proposal Form</Link>
                                <Link href={"/forms/reimbursement?session="+sesh}>Reimbursement Form</Link>
                            </div>
                    </div>

                    <div className="navbar-link">
                        <Link href={"/finances?session="+sesh} className="navbar-link">Finances</Link>
                    </div>

                    <div className="navbar-link">
                        <Link href={"/contact?session="+sesh} className="navbar-link">Contact</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
