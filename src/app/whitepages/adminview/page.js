'use client'
import Image from "next/image";
import styles from "./page.css";
import { useState } from "react"; 
import WhitePageBubble from "../../components/whitepagebubble/whitepagebubble";
import WhitePopUp from "../../components/whitepagepopup/infopopup/infopopup"
import AdminPopUp from "@/app/components/whitepagepopup/adminpopup/adminpopup";

export default function Whitepages() {
  const [buttonPopUp, setButtonPopUp] = useState(false);
  const [whiteList, setWhiteList] = useState([{"name":"Tanya","position":"PM","email":"tanyaberklee","image":"https://www.seacology.org/wp-content/uploads/2020/01/duane_snorkel_tonga-scaled-e1579722582118-478x549.jpg"},
                                              {"name":"sophia","position":"devloper","email":"sophiaberklee","image":"https://www.seacology.org/wp-content/uploads/2020/01/duane_snorkel_tonga-scaled-e1579722582118-478x549.jpg"},
                                              {"name":"bussy","position":"PM","email":"bussyberklee","image":"https://www.seacology.org/wp-content/uploads/2020/01/duane_snorkel_tonga-scaled-e1579722582118-478x549.jpg"},
                                              {"name":"camila","position":"devloper","email":"camilaberklee","image":"https://www.seacology.org/wp-content/uploads/2020/01/duane_snorkel_tonga-scaled-e1579722582118-478x549.jpg"},
                                              {"name":"renata","position":"devloper","email":"renataberklee","image":"https://www.seacology.org/wp-content/uploads/2020/01/duane_snorkel_tonga-scaled-e1579722582118-478x549.jpg"}]);

  const togglePopUp = () => {
    setButtonPopUp(!buttonPopUp);
  }

  return (
    <div className={styles.page}>
      <div className='top'>
        <p className = 'title'> Team</p>
        <div className = 'btz'>
        <button class="blue" id="large">Edit View</button>
        </div>

      </div>
      <hr className="blueline" />
      <hr className="yellowline" />

      <AdminPopUp trigger={buttonPopUp} close = {togglePopUp}/>

      <div className="bubble-container">
        {whiteList.map(function (member){
          return (
            <div className = "bubble-wrapper" key={member.email}>
              <WhitePageBubble 
                src={member.image} 
                alt="CeoPic"
                name={member.name}
                position={member.position}
                email={member.email}
                onClick={togglePopUp} // Pass the toggle function here
              />
            </div>
          )
        })}
      </div>
    </div>
  );
}