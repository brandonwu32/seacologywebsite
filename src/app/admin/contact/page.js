"use client"

import styles from "./page.css"
import Navbar from "../../components/navbar/navbar";
import Button from '../../components/button/button';
import Heading from "../../components/info-hub/heading"
import Body from "../../components/info-hub/pages/project-management/body";
import Link from "next/link"


export default function Contacts() {
    var itemOne = {
        type: "paragraph",
        content:"PROJECTS Send email to: Project ideas, questions, or proposals Karen or Mary  Documents: timeline, budget, signed agreements, maps, wiring instructions, etc. Amanda  Project updates and photos (before each Board of Directors meeting) Karen or Mary  Request for project grant payments Amanda "
    }
    var itemTwo = {
        type: "paragraph",
        content: "EXPENSES Send email to:  Request for prior approval of expenses Karen or Mary  Expense reimbursement requests Kevin"
    }
    var itemThree = {
        type: "header", 
        content: "STAFF EMAILS"
    }
   
   var itemFour = {
    type: "paragraph",
    content: "Duane Silverstein, Executive Director duane@seacology.org Karen Peterson, Senior Manager of Special Initiatives   (Africa, Dominican Republic) Mary Randolph, Program Manager (Asia, the Americas, Caribbean, Europe, Oceania) karen@seacology.org  mary@seacology.org,Kevin Claassen, Accounting Manager kevin@seacology.org  Amanda Kirkhart, Program Assistant amanda@seacology.org  Erin Coyne, Institutional Giving Officer erin@seacology.org  Joe Clerici, Communications Director joe@seacology.org Max Rojas-Domke, Individual Giving Manager max@seacology.org    "
   }
   var itemFive = {
    type: "header",
    content: "Seacology"
}

var itemSix = {
    type: "paragraph",
    content: "1623 Solano Avenue Berkeley, California 94707 USA"
}
var itemSeven = {
    type: "paragraph", 
    content: "Telephone +1 510-559-3505"
}
var itemEight = {
    type: "paragraph",
    content: "www.seacology.org"
}
var itemNine = {
    type: "paragraph",
    content: "Thank you for your hard work for Seacology and island communities!"
}
  
    

var textList = [itemOne, itemTwo, itemThree, itemFour, itemFive, itemSix, itemSeven, itemEight,itemNine ]


return (
    <div>
        <Navbar/> 
        <div className="page-wrapper">
            <Heading text="Contacts" buttonText="edit" edit ={true}/>
            
            <div>
                <Body textList={textList} title="Who to Contact at Seacology"/>
            </div>

            <div className="button-wrapper">
                <Button color="blue" size="small" text="back"/>
                <Button color="blue" size="small" text="next"/>
            </div>

        </div>
        
    </div>
);
}