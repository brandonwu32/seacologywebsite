
import styles from "./page.css";
import WhitePopUp from "../../components/whitepagepopup/infopopup/infopopup"
import Button from "../../components/button/button";
import Link from 'next/link'
import WhitepagesRenderer from "../whitepagesRender";
import ProfileSkeletons from '../../components/skeletons/whitepages/profileSkeletons';
import { Suspense } from 'react';


export default function Whitepages() {

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

      <Suspense fallback={<ProfileSkeletons/>}>
          <WhitepagesRenderer/>
        </Suspense>
          
      </div>
  );
  
}