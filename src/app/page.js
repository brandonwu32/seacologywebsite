"use client"

import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/navbar/navbar";
import Heading from "./components/info-hub/heading"
import Welcome from "../app/components/info-hub/pages/welcome/welcome"
import PM_Overview  from "./components/info-hub/pages/project-management/pm-overview";
import Step1 from "./components/info-hub/pages/project-management/step1"
import Step4 from "./components/info-hub/pages/project-management/step4"

export default function Home() {
  return (
    <>
    <Step1/>
    </>
     
  );
}
