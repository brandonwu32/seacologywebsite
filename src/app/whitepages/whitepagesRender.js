'use client'
import InfoPageBubble from "../components/whitepagebubbles/infobubble/infobubble";
import styles from "./page.css";
import { useState } from "react";
import seacology_Logo from "../../../assets/logo-blue-web-transparent.png";

export function WhitepagesRenderer(props) {
    // function addMember() {
    //     console.log(whiteList);
    //     setWhiteList(...whiteList, <InfoPageBubble 
    //         src={seacology_Logo} 
    //         alt="CeoPic"
    //         name="BUSSY"
    //         position="BUSSY"
    //         email="BUSSY"
    //     />);
    // }
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
            {whiteList}
        </div>
      </div>
    );
  }