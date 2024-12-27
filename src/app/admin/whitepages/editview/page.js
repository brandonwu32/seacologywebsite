'use client'

import { fetchMembers } from "../../../lib/data";
import { useState, useEffect } from "react";
import AddPopUp from "../../../components/whitepagepopup/adminpopup/addpopup/addpopup";
import EditPageBubble from "../../../components/whitepagebubbles/editbubble/editpagebubble";
import Button from "../../../components/button/button";
import seacology_Logo from "../../../../../assets/logo-blue-web-transparent.png";
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';


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
   console.log(newMember);
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
     console.log(`Member with email ${email} deleted successfully.`);
   } catch (error) {
     console.error("Error deleting member:", error);
   }
 }


 // Render member bubbles
 function bubbleMember(item) {
   return (
     <EditPageBubble
       key={item.email}
       src={seacology_Logo}
       alt="CeoPic"
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
           <Link href={"/whitepages/adminview?session="+sesh}>
             <Button color="red" size="large" text="Editing" />
           </Link>
           <Button color="blue" size="large" text="Add Member" onClick={toggleAddPopUp} />
         </div>
       </div>
     </div>
     <hr className="EWPblueline" />
     <hr className="EWPyellowline" />
     <p className="clickremove">**Click on a Member to Remove</p>


     {/* AddPopUp with AddMemberForm */}
     <AddPopUp trigger={addPopUp} close={toggleAddPopUp}>
     </AddPopUp>


     {/* Render member bubbles */}
     <div className="WPbubble-container">
       {whiteList.map((item) => bubbleMember(item))}
     </div>
   </div>
 );
}
