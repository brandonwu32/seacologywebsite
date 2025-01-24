'use client'

import { useState, useEffect } from 'react';
import '../navbar/navbar.css';
import Image from "next/image";
import SeacologyLogo from "../../../../assets/seacology_logo.png";
import Button from '../button/button'
import { useSearchParams } from 'next/navigation';
import { isAuthenticated } from '../../lib/data'
import NavBarPopUp from '../navbarpopup/navbarpopup';
import Link from "next/link"
import { Suspense } from "react";
import styles from "./navbar.css"

export default function MobileNav() {
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
    
    return (
        <div class="topnav">
            <a href="#home" class="active">Logo</a>
            <div id="myLinks">
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div>
            <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                <i class="fa fa-bars"></i>
            </a>
        </div>
    )
}