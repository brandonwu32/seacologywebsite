"use client"

import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/navbar/navbar";
import Heading from "./components/info-hub/heading"
import Welcome from "../app/components/info-hub/pages/welcome/welcome"
import Step4 from "./components/info-hub/pages/project-management/step4"
import Step5 from "./components/info-hub/pages/project-management/step5"

export default function Home() {
  return (
   /* <div className={styles.page}>
      <Navbar/> 
      <Heading text = "Welcome"  nextText = "next"/> 

      <Welcome/>
     
    </div> */

    <div>
      <Step5/>
    </div>


     
  );
}
