'use client'


import styles from "./page.css";
import InfoPageBubble from "../components/whitepagebubbles/infobubble/infobubble";
import { fetchMembers } from "../lib/data";
import seacology_Logo from "../../../assets/seacology_logo.png";
import { useState, useEffect } from "react";
import { useSearchParams } from 'next/navigation';


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
  }, []);

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
          <p className = 'WPtitle'> Team</p>
          <div className = 'btzz'>
          </div>
        </div>
        <hr className="WPblueline" />
        <hr className="WPyellowline" />
        <div className = "WPbubble-container">
        {whiteList.map((item) =>
            bubbleMember(item)
        )}
      </div>
      </div>
  )
}