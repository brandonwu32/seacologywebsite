'use client'

import { useState, useEffect } from 'react';
import '../navbar/Navbar.css';
import Image from "next/image";
import SeacologyLogo from "../../../../assets/seacology_logo.png";
import Button from '../button/button'
import { useSearchParams } from 'next/navigation';
import { isAuthenticated } from '../../lib/data'
import NavBarPopUp from '../navbarpopup/navbarpopup';
import Link from "next/link"


export default function Navbar() {

    // Define state to store search input
    const [searchQuery, setSearchQuery] = useState("");

    const [authentication, setAuthentication] = useState((false, false));
    const searchParams = useSearchParams();
    let sesh = searchParams.get("session");
    const [adminView, setAdminView] = useState(false)

    const [popupTrigger, setPopupTrigger] = useState(false)

    const togglePopUp = () => {
        setPopupTrigger(!popupTrigger);
      }

    function toggleAdminView() {
        setAdminView(!adminView);
    }

    useEffect(() => {
        const checkAdmin = async () => {
        try {
            const result = await isAuthenticated(sesh);
            setAuthentication(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        };

        checkAdmin()
    }, []);


    // Handler for search input change

    return (
        <div id="wrapper">
            <NavBarPopUp trigger={popupTrigger} close={togglePopUp} name={"Search for Keywords in Guidelines"}/>
            <div id="navbar-wrapper">
                <div className="img-with-text">
                    <Link href={`${adminView && '/admin' || ''}`+"/welcome?session="+sesh}>
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
                    {authentication[1] && <Button onClick={toggleAdminView} color='blue' size='small' text={`${adminView && 'Admin View' || 'Normal View'}`}></Button>}

                    <div className="navbar-link">
                        <Link href={`${adminView && '/admin' || ''}`+"/guidelines?session="+sesh} className="navbar-link">Guidelines</Link>
                    </div>

                    <div className="navbar-link">
                        <Link href={`${adminView && '/admin' || ''}`+"/projectmanagement/pm-overview?session="+sesh} className="navbar-link">Project Management</Link>
                        <div className="dropdown">
                            <Link href={`${adminView && '/admin' || ''}`+"/projectmanagement/pm-overview?session="+sesh}>Overview</Link>
                            <Link href={`${adminView && '/admin' || ''}`+"/projectmanagement/step1?session="+sesh}>Step 1</Link>
                            <Link href={`${adminView && '/admin' || ''}`+"/projectmanagement/step2?session="+sesh}>Step 2</Link>
                            <Link href={`${adminView && '/admin' || ''}`+"/projectmanagement/step3?session="+sesh}>Step 3</Link>
                            <Link href={`${adminView && '/admin' || ''}`+"/projectmanagement/step4?session="+sesh}>Step 4</Link>
                            <Link href={`${adminView && '/admin' || ''}`+"/projectmanagement/step5?session="+sesh}>Step 5</Link>
                            <Link href={`${adminView && '/admin' || ''}`+"/projectmanagement/step6?session="+sesh}>Step 6</Link>
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
                        <Link href={`${adminView && '/admin' || ''}`+"/finances?session="+sesh} className="navbar-link">Finances</Link>
                    </div>

                    <div className="navbar-link">
                        <Link href={`${adminView && '/admin' || ''}`+"/contact?session="+sesh} className="navbar-link">Contact</Link>
                    </div>
                    <div className="navbar-link">
                        <Link href={`${adminView && '/admin' || ''}`+"/whitepages?session="+sesh} className="navbar-link">Whitepages</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
