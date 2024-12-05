'use client'


import styles from "./page.css";
import { fetchMembers } from "../../../lib/data";
import { useState, useEffect } from "react";
import AddPopUp from "../../../components/whitepagepopup/adminpopup/addpopup/addpopup"
import EditPageBubble from "../../../components/whitepagebubbles/editbubble/editpagebubble";
import Button from "../../../components/button/button";
import seacology_Logo from "../../../../../assets/logo-blue-web-transparent.png";
import Link from 'next/link'
import WhitepagesRenderer from "../../whitepagesRender";
import ProfileSkeletons from '../../../components/skeletons/whitepages/profileSkeletons';
import InfoPageBubble from "../../../components/whitepagebubbles/infobubble/infobubble";
import { Suspense } from 'react';

export default function Whitepages() {
  const [addPopUp, setButtonPopUp] = useState(false);
  const [whiteList, setWhiteList] = useState([]);
  
  useEffect(() => {
    const members = async () => {
      try {
        const result = await fetchMembers();
        setWhiteList(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    members()
  }, [whiteList]);

  function bubbleMember(item) {
    console.log(item.name)
    return (
      <InfoPageBubble
                src={seacology_Logo}
                alt="CeoPic"
                name={item.name}
                position={item.position}
                email={item.email}
            />
    )
  }

  const toggleAddPopUp = () => {
    console.log("SLDKFJLSKDJF");
    setButtonPopUp(!addPopUp);
  }
  
  return (
    <div className='editview-page'>
      <div className='top'>
        <p className = 'EWPtitle'>Team</p>
        <div className="top-left">
          <div className = 'btz'>
            <Link href="/whitepages/adminview">
            <Button color="red" size="large" text="Editing"/>
            </Link>
            <Button color="blue" size="large" text="Add Member" onClick = {()=>{toggleAddPopUp()}}/>
          </div>
        </div>
      </div>
      <hr className="EWPblueline" />
      <hr className="EWPyellowline" />
      <p className = "clickremove">**Click on a Member to Remove</p>
      <div className = "WPbubble-container">
        {whiteList.map((item) =>
            bubbleMember(item)
        )}
      </div>
    </div>
  );
}