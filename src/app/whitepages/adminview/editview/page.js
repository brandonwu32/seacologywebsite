'use client'
import Image from "next/image";
import styles from "./page.css";
import Button from "../../../components/button/button";
import Navbar from "../../../components/navbar/navbar";
import AdminPopUp from "../../../components/whitepagepopup/adminpopup/adminpopup";
import { useState } from "react"; 
import WhitePageBubble from "../../../components/whitepagebubble/whitepagebubble";
import AddPopUp from "../../../components/whitepagepopup/adminpopup/addpopup/addpopup"

export default function Whitepages() {
  const [addPopUp, setButtonPopUp] = useState(false);
  const [editPopUp, setEditPopUp] = useState(false);
  const [whiteList, setWhiteList] = useState([{"name":"Tanya","position":"PM","email":"tanyaberklee","image":"https://www.seacology.org/wp-content/uploads/2020/01/duane_snorkel_tonga-scaled-e1579722582118-478x549.jpg"},
                                              {"name":"sophia","position":"devloper","email":"sophiaberklee","image":"https://www.seacology.org/wp-content/uploads/2020/01/duane_snorkel_tonga-scaled-e1579722582118-478x549.jpg"},
                                              {"name":"bussy","position":"PM","email":"bussyberklee","image":"https://www.seacology.org/wp-content/uploads/2020/01/duane_snorkel_tonga-scaled-e1579722582118-478x549.jpg"},
                                              {"name":"camila","position":"devloper","email":"camilaberklee","image":"https://www.seacology.org/wp-content/uploads/2020/01/duane_snorkel_tonga-scaled-e1579722582118-478x549.jpg"},
                                              {"name":"renata","position":"devloper","email":"renataberklee","image":"https://www.seacology.org/wp-content/uploads/2020/01/duane_snorkel_tonga-scaled-e1579722582118-478x549.jpg"}]);

  const toggleAddPopUp = () => {
    setButtonPopUp(!addPopUp);
  }
  const toggleEditPopUp = () => {
    setEditPopUp(!editPopUp);
  }

  return (
    <div className={styles.page}>
      <div className='top'>
        <p className = 'title'>Team</p>
        <div className = 'btz'>
          <button className="red" id="large">Edititing</button>
          <button className="blue" id="large" onClick = {toggleAddPopUp}>Add Member</button>
        </div>
        <p className = "clickremove">Click on a Member to Remove</p>
      </div>
      <hr className="blueline" />
      <hr className="yellowline" />

      <AddPopUp trigger={addPopUp} close = {toggleAddPopUp}/>
      <AdminPopUp trigger={editPopUp} close = {toggleEditPopUp}/>

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
                onClick={toggleEditPopUp} // Pass the toggle function here
              />
            </div>
          )
        })}
      </div>
    </div>
  );
}