'use client'

import styles from "./page.css";
import { useState, useEffect } from "react";
import { fetchMembers } from "../../lib/data";
import Button from "../../components/button/button";
import Link from 'next/link'
import InfoPageBubble from "../../components/whitepagebubbles/infobubble/infobubble";
import { useSearchParams } from 'next/navigation';



export default function Whitepages() {
  const [whiteList, setWhiteList] = useState([]);
  const searchParams = useSearchParams();
  let sesh = searchParams.get("session");

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
          <Suspense>
            <Link href={"/admin/whitepages/editview?session="+sesh}>
              <Button color="blue" size="large" text="Edit View"/>
            </Link>
          </Suspense>
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