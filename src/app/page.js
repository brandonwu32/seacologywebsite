import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/navbar/navbar";
import Heading from "./components/info-hub/heading"
import Welcome from "../app/components/info-hub/pages/welcome/welcome"

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar/>
      <Heading/> 
      <Welcome/>
    </div>
  );
}
