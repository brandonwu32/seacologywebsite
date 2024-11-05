"use client"

import Image from "next/image";
import styles from "./page.module.css";
import Welcome from "../app/components/info-hub/pages/welcome/welcome"
import Guidelines from "./components/info-hub/pages/guidelines/guidelines";
import PM_Overview  from "./components/info-hub/pages/project-management/pm-overview";
import Identifying from "./components/info-hub/pages/project-management/identifying";
import NewProjProposal from "./components/info-hub/pages/project-management/newprojproposal"
import Step1 from "./components/info-hub/pages/project-management/step1"
import Step2 from "./components/info-hub/pages/project-management/step2"
import Step3 from "./components/info-hub/pages/project-management/step3";
import Step4 from "./components/info-hub/pages/project-management/step4"
import Step5 from "./components/info-hub/pages/project-management/step5"
import Step6 from "./components/info-hub/pages/project-management/step6"
import Contact from "./components/info-hub/pages/project-management/contact"


export default function Home() {
  return (
    <>
    <Contact/>
    </>
    

  );
}
