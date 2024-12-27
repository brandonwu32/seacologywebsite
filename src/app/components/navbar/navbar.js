'use client'

import { useState } from 'react';
import Link from 'next/link';
import styles from '../navbar/Navbar.css';
import Image from "next/image";
import SeacologyLogo from "../../../../assets/seacology_logo.png";
import { useSearchParams } from 'next/navigation';

export default function Navbar() {
    // Define state to store search input
    const [searchQuery, setSearchQuery] = useState("");
    const searchParams = useSearchParams();
    let sesh = searchParams.get("session");
    // Handler for search input change
    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    // Handler for search submission (captures search text and clears input)
    const handleSearchSubmit = () => {
        console.log("Searched for:", searchQuery);
        setSearchQuery("");  // Clear the input after submission
        // Implement functionality here, e.g., filtering items, redirecting, etc.
    };

    // Handle Enter key press to trigger search
    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            handleSearchSubmit();
        }
    };

    return (
        <div id="wrapper">

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
                            <input
                                type="text"
                                placeholder="Search..."
                                id="search-bar"
                                value={searchQuery}
                                onChange={handleInputChange}
                                onKeyDown={handleKeyDown} // Capture Enter key
                            />
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
