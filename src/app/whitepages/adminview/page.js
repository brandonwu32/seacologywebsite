'use client'
import styles from "./page.css";
import { useState } from "react"; 
import WhitePopUp from "../../components/whitepagepopup/infopopup/infopopup"
import InfoPageBubble from "../../components/whitepagebubbles/infobubble/infobubble";
import Button from "../../components/button/button";
import Link from 'next/link'

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
        <p className = 'AWPtitle'> Team</p>
        <div className = 'btzz'>
        <Link href="/whitepages/adminview/editview">
          <Button color="blue" size="large" text="Edit View"/>
        </Link>
        </div>
      </div>
      <hr className="AWPblueline" />
      <hr className="AWPyellowline" />

      <WhitePopUp trigger={buttonPopUp} close = {togglePopUp}/>

      <div className="AWPbubble-container">
        {whiteList.map(function (member){
          return (
            <div className = "AWPbubble-wrapper" key={member.email}>
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