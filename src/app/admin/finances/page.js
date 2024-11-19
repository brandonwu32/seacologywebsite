'use client'

import styles from "./page.css"
import Navbar from "../../components/navbar/navbar"
import Button from '../../components/button/button';
import Heading from "../../components/info-hub/heading"
import Body from "../../components/info-hub/pages/project-management/body";
import Link from "next/link"


export default function Finances() {
    var itemFour = {
        type: "header",
        content: "Requesting Small Grants and Maintenance Funds"
    }
   var itemFive = {
    type: "paragraph",
    content: "If a community has a small project, or needs money for maintenance or repair of an existing project,  you do not need to wait until the next board meeting to request funds. We can approve a small grant  between meetings. Just let the program manager know what the community needs."
   }
   var itemSix = {
    type: "header",
    content: "Making Nominations for the Seacology Prize"
   }
   var itemSeven = {
    type: "paragraph",
    content: "Every June, the Seacology board chooses a winner of the Seacology Prize. The prize goes to an  indigenous islander for exceptional achievement in preserving island environment and culture. The  recipient receives USD 10,000 and a trip to the award ceremony in October, usually in Berkeley,  California."
   }
   var itemEight = {
    type: "paragraph",
    content: "We rely on our field representatives to nominate people for this honor. Each year, we will ask you  whether you know of someone who is doing outstanding work in island conservation, and explain  how to nominate someone. Feel free to share nomination instructions with your contacts in the  region—we are always looking for strong nominees."
   }

   var itemNine = {
    type: "header",
    content: "Organizing Site Visits by Seacology Staff or Donors"
   }
   var itemTen = {
    type: "paragraph",
    content: "Occasionally, Seacology staff may come to your country to meet with you and see projects. They will  work with you to ensure that the visit is convenient for you as well as for the communities."
   }
   var itemEleven = {
    type: "paragraph",
    content: "Seacology also organizes a few expeditions each year to show board members and donors our great  projects. If we plan an expedition to your area, we will work with you to arrange site visits or other  events such as opening celebrations."
   }
    

    var textList = [itemFour, itemFive, itemSix, itemSeven, itemEight, itemNine, itemTen, itemEleven ]


    return (
        <div>
            <Navbar/> 
            <div className="page-wrapper">
                <Heading text="Finances Info" buttonText="edit"/>
                
                <div>
                    <Body textList={textList} title=""/>
                </div>

                <div className="button-wrapper">
                    <Link href="/admin/projectmanagement/step6">
                        <Button color="blue" size="small" text="back"/>
                    </Link>

                    <Link href="/admin/contact">
                        <Button color="blue" size="small" text="next"/>
                    </Link>
                </div>

            </div>
           
        </div>
    
        

    );
}