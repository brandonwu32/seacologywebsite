import styles from "./page.css";
import InfoPageBubble from "../components/whitepagebubbles/infobubble/infobubble";
import { fetchMembers } from "../lib/data";
import seacology_Logo from "../../../assets/seacology_logo.png";
import WhitepagesRenderer from "./whitepagesRender";
import ProfileSkeletons from '../components/skeletons/whitepages/profileSkeletons';
import { Suspense } from 'react';


export default function Whitepages() {
  return (
          <div className={styles.page}>
        <div className='top'>
          <p className = 'WPtitle'> Team</p>
          <div className = 'btzz'>
          </div>
        </div>
        <hr className="WPblueline" />
        <hr className="WPyellowline" />
        <Suspense fallback={<ProfileSkeletons/>}>
          <WhitepagesRenderer/>
        </Suspense>
      </div>
  );
}