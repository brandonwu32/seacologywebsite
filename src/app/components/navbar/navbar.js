'use client'

import { useState } from 'react';
import Link from 'next/link';
import styles from '../navbar/Navbar.css';
import Image from "next/image";
import SeacologyLogo from "../../../../assets/seacology_logo.png";

export default function Navbar() {
    // Define state to store search input
    const [searchQuery, setSearchQuery] = useState("");

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
                    <Link href="/welcome">
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
                        <a href="/guidelines" className="navbar-link">Guidelines</a>
                    </div>

                    <div className="navbar-link">
                        <a href="/projectmanagement/pm-overview" className="navbar-link">Project Management</a>
                        <div className="dropdown">
                            <a href="/projectmanagement/pm-overview">Overview</a>
                            <a href="/projectmanagement/step1">Step 1</a>
                            <a href="/projectmanagement/step2">Step 2</a>
                            <a href="/projectmanagement/step3">Step 3</a>
                            <a href="/projectmanagement/step4">Step 4</a>
                            <a href="/projectmanagement/step5">Step 5</a>
                            <a href="/projectmanagement/step6">Step 6</a>
                        </div>
                    </div>

                    <div className="navbar-link">
                        <a className="navbar-link">Status Updates</a>
                            <div className="dropdown">
                                <a href="/forms/conservationagreement">Conservation Agreement</a>
                                <a href="/forms/finalprojectreport">Final Project Report</a>
                                <a href="/forms/grantagreementform">Grant Agreement</a>
                                <a href="/forms/projectprogressreport">Project Progress Report</a>
                                <a href="/forms/projectproposalform">Project Proposal Form</a>
                                <a href="/forms/reimbursement">Reimbursement Form</a>
                            </div>
                    </div>

                    <div className="navbar-link">
                        <a href="/finances" className="navbar-link">Finances</a>
                    </div>

                    <div className="navbar-link">
                        <a href="/contact" className="navbar-link">Contact</a>
                    </div>

                </div>
            </div>
        </div>
    );
}
