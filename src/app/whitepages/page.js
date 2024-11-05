'use client'
import Image from "next/image";
import styles from "./page.css";
import Button from "../components/button/button";
import Navbar from "../components/navbar/navbar";
import WhitePagePopUp from "../components/whitepagepopup/infopopup/infopopup";
import { useState } from "react"; 
import WhitePageBubble from "../components/whitepagebubble/whitepagebubble";

export default function Whitepages() {
  const [buttonPopUp, setButtonPopUp] = useState(false);


  const togglePopUp = () => {
    setButtonPopUp(!buttonPopUp);
  }

  return (
    <div className={styles.page}>
      <div className='title'>
        <p> Team</p>
      </div>
      <hr className="blueline" />
      <hr className="yellowline" />

      <WhitePagePopUp trigger={buttonPopUp} close = {togglePopUp}/>

      <div className="bubble-container">
        <div className="b1">
          <WhitePageBubble 
            src="https://www.seacology.org/wp-content/uploads/2020/01/duane_snorkel_tonga-scaled-e1579722582118-478x549.jpg"
            alt="CeoPic"
            name="name"
            position="position"
            email="email"
            onClick={togglePopUp} // Pass the toggle function here
          />
        </div>

        <div className="b2">
          <WhitePageBubble 
            src="https://www.seacology.org/wp-content/uploads/2020/01/duane_snorkel_tonga-scaled-e1579722582118-478x549.jpg"
            alt="CeoPic"
            name="name"
            position="position"
            email="email"
            onClick={togglePopUp} // Pass the toggle function here
          />
        </div>

        <div className="b3">
          <WhitePageBubble 
            src="https://www.seacology.org/wp-content/uploads/2020/01/duane_snorkel_tonga-scaled-e1579722582118-478x549.jpg"
            alt="CeoPic"
            name="name"
            position="position"
            email="email"
            onClick={togglePopUp} // Pass the toggle function here
          />
        </div>
      </div>
      
      <div className="bubble-container">
        <div className="b4">
          <WhitePageBubble 
            src="https://www.seacology.org/wp-content/uploads/2020/01/duane_snorkel_tonga-scaled-e1579722582118-478x549.jpg"
            alt="CeoPic"
            name="name"
            position="position"
            email="email"
            onClick={togglePopUp} // Pass the toggle function here
          />
        </div>

        <div className="b5">
          <WhitePageBubble 
            src="https://www.seacology.org/wp-content/uploads/2020/01/duane_snorkel_tonga-scaled-e1579722582118-478x549.jpg"
            alt="CeoPic"
            name="name"
            position="position"
            email="email"
            onClick={togglePopUp} // Pass the toggle function here
          />
        </div>
        
        <div className="b6">
          <WhitePageBubble 
            src="https://www.seacology.org/wp-content/uploads/2020/01/duane_snorkel_tonga-scaled-e1579722582118-478x549.jpg"
            alt="CeoPic"
            name="name"
            position="position"
            email="email"
            onClick={togglePopUp} // Pass the toggle function here
          />
        </div>
      </div>
    </div>
  );
}