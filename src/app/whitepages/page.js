'use client'


import styles from "./page.css";
import InfoPageBubble from "../components/whitepagebubbles/infobubble/infobubble";
import { fetchMembers } from "../lib/data";
import { useState, useEffect } from "react";


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
                image={item.image}
                alt="https://media.licdn.com/dms/image/v2/C560BAQFGLEe_yK2JRw/company-logo_200_200/company-logo_200_200/0/1630601534327/seacology_logo?e=1746662400&v=beta&t=pG41ZFN10ckgCxb3Cu5RQiVv0Rbo9SGrcVF1rTf5PFo"
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
            <div key={item.id}>{bubbleMember(item)}</div>
        )}
      </div>
      </div>
  )
}