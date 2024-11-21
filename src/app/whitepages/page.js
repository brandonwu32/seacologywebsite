'use client'
import styles from "./page.css";
import { useState } from "react"; 
import InfoPageBubble from "../components/whitepagebubbles/infobubble/infobubble";

export default function Whitepages() {
  const [whiteList, setWhiteList] = useState([{"name":"Tanya","position":"PM","email":"tanyaberklee","image":"https://www.seacology.org/wp-content/uploads/2020/01/duane_snorkel_tonga-scaled-e1579722582118-478x549.jpg"},
                                              {"name":"sophia","position":"devloper","email":"sophiaberklee","image":"https://www.seacology.org/wp-content/uploads/2020/01/duane_snorkel_tonga-scaled-e1579722582118-478x549.jpg"},
                                              {"name":"bussy","position":"PM","email":"bussyberklee","image":"https://www.seacology.org/wp-content/uploads/2020/01/duane_snorkel_tonga-scaled-e1579722582118-478x549.jpg"},
                                              {"name":"camila","position":"devloper","email":"camilaberklee","image":"https://www.seacology.org/wp-content/uploads/2020/01/duane_snorkel_tonga-scaled-e1579722582118-478x549.jpg"},
                                              {"name":"renata","position":"devloper","email":"renataberklee","image":"https://www.seacology.org/wp-content/uploads/2020/01/duane_snorkel_tonga-scaled-e1579722582118-478x549.jpg"}]);

  return (
    <div className={styles.page}>
      <div className='top'>
        <p className = 'WPtitle'> Team</p>
        <div className = 'btzz'>
        </div>
      </div>
      <hr className="WPblueline" />
      <hr className="WPyellowline" />

      <div className="WPbubble-container">
        {whiteList.map(function (member){
          return (
            <div className = "WPbubble-wrapper" key={member.email}>
              <InfoPageBubble 
                src={member.image} 
                alt="CeoPic"
                name={member.name}
                position={member.position}
                email={member.email}
              />
            </div>
          )
        })}
      </div>
    </div>
  );
}