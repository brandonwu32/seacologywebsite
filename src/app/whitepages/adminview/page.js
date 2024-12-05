'use client'

import styles from "./page.css";
import { useState, useEffect } from "react";
import { fetchMembers } from "../../lib/data";
import WhitePopUp from "../../components/whitepagepopup/infopopup/infopopup"
import Button from "../../components/button/button";
import Link from 'next/link'
import WhitepagesRenderer from "../whitepagesRender";
import ProfileSkeletons from '../../components/skeletons/whitepages/profileSkeletons';
import { Suspense } from 'react';
import seacology_Logo from "../../../../assets/logo-blue-web-transparent.png";
import InfoPageBubble from "../../components/whitepagebubbles/infobubble/infobubble";



export default function Whitepages() {
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

  return (
    <div className={styles.page}>
      <div className='top'>
        <p className = 'AWPtitle'> Team</p>
        <div className = 'btzz'>
        <Link href="/whitepages/adminview/editview">
          <Button color="blue" size="large" text="Edit View"/>
        </Link>
        </div>
      </div>
      <hr className="AWPblueline" />
      <hr className="AWPyellowline" />

      <div className = "WPbubble-container">
        {whiteList.map((item) =>
            bubbleMember(item)
        )}
      </div>
          
      </div>
  );
  
}