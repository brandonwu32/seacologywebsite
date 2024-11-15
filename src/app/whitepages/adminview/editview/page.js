'use client'
import styles from "./page.css";
import { useState } from "react"; 
import AddPopUp from "../../../components/whitepagepopup/adminpopup/addpopup/addpopup"
import EditPageBubble from "@/app/components/whitepagebubbles/editbubble/editpagebubble";
import Button from "@/app/components/button/button";
import Link from 'next/link'

export default function Whitepages() {
  const [addPopUp, setButtonPopUp] = useState(false);
  const [whiteList, setWhiteList] = useState([{"name":"Tanya","position":"PM","email":"tanyaberklee","image":"https://www.seacology.org/wp-content/uploads/2020/01/duane_snorkel_tonga-scaled-e1579722582118-478x549.jpg"},
                                              {"name":"sophia","position":"devloper","email":"sophiaberklee","image":"https://www.seacology.org/wp-content/uploads/2020/01/duane_snorkel_tonga-scaled-e1579722582118-478x549.jpg"},
                                              {"name":"bussy","position":"PM","email":"bussyberklee","image":"https://www.seacology.org/wp-content/uploads/2020/01/duane_snorkel_tonga-scaled-e1579722582118-478x549.jpg"},
                                              {"name":"camila","position":"devloper","email":"camilaberklee","image":"https://www.seacology.org/wp-content/uploads/2020/01/duane_snorkel_tonga-scaled-e1579722582118-478x549.jpg"},
                                              {"name":"renata","position":"devloper","email":"renataberklee","image":"https://www.seacology.org/wp-content/uploads/2020/01/duane_snorkel_tonga-scaled-e1579722582118-478x549.jpg"}]);

  const toggleAddPopUp = () => {
    setButtonPopUp(!addPopUp);
  }

  return (
    <div className={styles.page}>
      <div className='top'>
        <p className = 'title'>Team</p>
        <div className="top-left">
          <div className = 'btz'>
            <Link href="/whitepages/adminview">
            <Button color="red" size="large" text="Editing"/>
            </Link>
            <Button color="blue" size="large" text="Add Member" onClick = {toggleAddPopUp}/>
          </div>
        </div>
      </div>
      <hr className="blueline" />
      <hr className="yellowline" />
      <p className = "clickremove">**Click on a Member to Remove</p>

      <AddPopUp trigger={addPopUp} close = {toggleAddPopUp}/>

      <div className="bubble-container">
        {whiteList.map(function (member){
          return (
            <div className = "bubble-wrapper" key={member.email}>
              <EditPageBubble
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