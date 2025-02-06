'use client'

import { fetchMembers } from "../../../lib/data";
import { useState, useEffect } from "react";
import AddPopUp from "../../../components/whitepagepopup/adminpopup/addpopup/addpopup";
import EditPageBubble from "../../../components/whitepagebubbles/editbubble/editpagebubble";
import Button from "../../../components/button/button";
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import styles from './page.css'
import { Suspense } from "react";

export default function Whitepages() {
 const [addPopUp, setButtonPopUp] = useState(false);
 const [whiteList, setWhiteList] = useState([]);
 const searchParams = useSearchParams();
 let sesh = searchParams.get("session");


 // Fetch initial members
 useEffect(() => {
   const members = async () => {
     try {
       const result = await fetchMembers();
       setWhiteList(result);
     } catch (error) {
       console.error("Error fetching data:", error);
     }
   };
   members();
 }, []);


 // Add a new member
 function addMemberTwo(newMember) {
   setWhiteList((prevList) => [...prevList, newMember]);
   addMember(newMember.name, newMember.email, newMember.position, newMember.password, newMember.admin);
 }


 // Delete a member
 async function deleteMember(email) {
   try {
     const response = await fetch(`/api/members/${email}`, {
       method: "DELETE",
     });


     if (!response.ok) {
       throw new Error("Failed to delete member");
     }


     // Update state to remove the deleted member
     setWhiteList((prevList) => prevList.filter((member) => member.email !== email));
     deleteMember(member.email);
   } catch (error) {
     console.error("Error deleting member:", error);
   }
 }


 // Render member bubbles
 function bubbleMember(item) {

  // if item.image is null, set image = url i sent u
  // else set it to the item's image
  if (item.image == null) {
    item.image = "https://i0.wp.com/digitalhealthskills.com/wp-content/uploads/2022/11/3da39-no-user-image-icon-27.png?fit=500%2C500&ssl=1"
  }
   return (
     <EditPageBubble
       key={item.email}
       image={item.image}
       src="slay"
       alt="https://media.licdn.com/dms/image/v2/C560BAQFGLEe_yK2JRw/company-logo_200_200/company-logo_200_200/0/1630601534327/seacology_logo?e=1746662400&v=beta&t=pG41ZFN10ckgCxb3Cu5RQiVv0Rbo9SGrcVF1rTf5PFo"
       name={item.name}
       position={item.position}
       email={item.email}
       user_id = {item.id}
       onClick={() => deleteMember(item.email)} // Trigger delete on click
     />
   );
 }


 // Toggle the Add Member popup
 const toggleAddPopUp = () => {
   setButtonPopUp(!addPopUp);
 };


 return (
   <div className="editview-page">
     <div className="top">
       <p className="EWPtitle">Team</p>
       <div className="top-left">
         <div className="btz">
            <Suspense>
              <Link href={"/admin/whitepages?session="+sesh}>
                <Button color="red" size="large" text="Editing" />
              </Link>
            </Suspense>
            <Button color="blue" size="large" text="Add Member" onClick={toggleAddPopUp} />
         </div>
       </div>
     </div>
     <hr className="EWPblueline" />
     <hr className="EWPyellowline" />
     <p className="clickremove">**Click on a Member to Remove</p>

      <AddPopUp trigger={addPopUp} close = {toggleAddPopUp}/>

      <div className="EWPbubble-container">
      {whiteList.map((item) =>
            bubbleMember(item)
        )}

      </div>
    </div>
  );
}
