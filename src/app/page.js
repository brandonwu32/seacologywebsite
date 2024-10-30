import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/navbar/navbar";
import Heading from "./components/info-hub/heading"

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar/>
      <Heading/> 
    </div>
  );
}
