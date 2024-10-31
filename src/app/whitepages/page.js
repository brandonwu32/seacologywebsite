import Image from "next/image";
import styles from "./page.css";
import Button from "../components/button/button";
import Navbar from "../components/navbar/navbar";
import whitePageBubble from "../components/whitepagebubble/whitepagebubble";



export default function Whitepages() {
  return (
    <div className="{styles.page}">
      <div className = "bar">
        <Navbar />
      </div>

      <div className = 'title'>
        <h1> Team</h1>
      </div>

      <whitePageBubble 
        src="../components/media/ceopic.jpg"
        alt="CeoPic"
        // onClick={() => console.log("Bubble clicked!")}  // Optional: custom onClick function
      />
      
      </div>
  );
}
