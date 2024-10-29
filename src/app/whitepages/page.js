import Image from "next/image";
import styles from "./page.css";
import Button from "../components/button/button";
import Navbar from "../components/navbar/navbar";

export default function Whitepages() {
  return (
    <div className={styles.page}>
      <Navbar/>
      <Button color = "red" size = "small" text = "bello" />
      </div>
  );
}
