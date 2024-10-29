import Image from "next/image";
import styles from "./page.module.css";
import Button from "./components/Button/Button";
export default function Home() {
  return (
    <div className={styles.page}>
      <Button color = "yellow" size = "small" text = "close" /> 
      <Button color = "blue" size = "log in" text = "enter" /> 








      </div>
     
  );
}
