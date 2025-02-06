'use client'

import styles from "./page.css";
import { useState, useEffect } from "react";
import { fetchMembers } from "../../lib/data";
import Button from "../../components/button/button";
import Link from 'next/link'
import InfoPageBubble from "../../components/whitepagebubbles/infobubble/infobubble";
import { useSearchParams } from 'next/navigation';
import { Suspense } from "react";



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

      <div className = "AWPbubble-container">
        {whiteList.map((item) =>
            bubbleMember(item)
        )}
      </div>

      </div>
  );

}