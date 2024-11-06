import React, { useState } from 'react';
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
        <>
        <div id="wrapper">
            <div id="navbar-wrapper">
                <div className="img-with-text">
                    <Image src={SeacologyLogo} id='seacology-logo' alt=''/>
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
                        <a href="#" className="navbar-link">Guidelines</a>
                        <div className="dropdown">
                            <a href="#">Sub-item 1</a>
                            <a href="#">Sub-item 2</a>
                            <a href="#">Sub-item 3</a>
                        </div>
                    </div>

                    <div className="navbar-link">
                        <a href="#" className="navbar-link">Project Management</a>
                        <div className="dropdown">
                            <a href="#">Step 1</a>
                            <a href="#">Step 2</a>
                            <a href="#">Step 3</a>
                            <a href="#">Step 4</a>
                            <a href="#">Step 5</a>
                            <a href="#">Step 6</a>
                        </div>
                    </div>

                    <div className="navbar-link">
                        <a href="#" className="navbar-link">Financial</a>
                        <div className="dropdown">
                            <a href="#">Sub-item 1</a>
                            <a href="#">Sub-item 2</a>
                            <a href="#">Sub-item 3</a>
                        </div>
                    </div>

                    <div className="navbar-link">
                        <a href="#" className="navbar-link">Prize Nominations</a>
                        <div className="dropdown">
                            <a href="#">Sub-item 1</a>
                            <a href="#">Sub-item 2</a>
                            <a href="#">Sub-item 3</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
