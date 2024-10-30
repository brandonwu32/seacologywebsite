import Bubble from "../components/bubble/bubble"

import Image from "next/image";
import styles from "./page.css";
import Navbar from "../components/navbar/navbar";

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar/>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            Get started by editing <code>src/app/page.js</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>
        <div className = "bubblie1">
            <Bubble heading = {"Guidelines"} subtext = {"hi"}/>
        </div>
        <div className = "bubblie2">
            <Bubble heading = {"Project Management"} subtext = {"hi"}/>

        </div>
        
        <div className = "bubblie3">
            <Bubble heading = {"Financial"} subtext = {"hi"}/>
        </div>
            <Bubble heading = {"Contact"} subtext = {"hi"}/>
            
      </div>
  );
}
