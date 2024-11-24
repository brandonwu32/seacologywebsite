"use client"

import styles from "../page.css"
import Navbar from "../../components/navbar/navbar";
import Button from '../../components/button/button';
import Heading from "../../components/info-hub/heading"
import Body from "../../components/info-hub/pages/project-management/body";
import Link from "next/link"


export default function Contact() {
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
    content: "- Duane Silverstein, Executive Director duane@seacology.org"
   }
    var itemFive = {
    type: "paragraph",
    content: "- Karen Peterson, Senior Manager of Special Initiatives (Africa, Dominican Republic, Oceania) karen@seacology.org "
   }

   var itemSix = {
    type: "paragraph",
    content: "- Mary Randolph, Program Manager (Asia, the Americas, Caribbean, Europe) mary@seacology.org "
   }

   var itemSeven = {
    type: "paragraph",
    content: "- Kevin Claassen, Accounting Manager kevin@seacology.org "
   }

   var itemEight = {
    type: "paragraph",
    content: "- Amanda Kirkhart, Program Assistant amanda@seacology.org "
   }

   var itemNine = {
    type: "paragraph",
    content: "- Erin Coyne, Institutional Giving Officer erin@seacology.org "
   }

   var itemTen = {
    type: "paragraph",
    content: "- Joe Clerici, Communications Director joe@seacology.org "
   }

   var itemEleven = {
    type: "paragraph",
    content: "- Max Rojas-Domke, Individual Giving Manager max@seacology.org "
   }

   var itemTwelve = {
    type: "header",
    content: "Seacology"
}

var itemThirteen = {
    type: "paragraph",
    content: "1623 Solano Avenue Berkeley, California 94707 USA"
}
var itemFourteen = {
    type: "paragraph",
    content: "Telephone: +1 510-559-3505"
}
var itemFifteen = {
    type: "paragraph",
    content: "www.seacology.org"
}
var itemSixteen = {
    type: "paragraph",
    content: "Thank you for your hard work for Seacology and island communities!"
}



var textList = [itemOne, itemTwo, itemThree, itemFour, itemFive, itemSix, itemSeven, itemEight,itemNine, itemTen, itemEleven, itemTwelve, itemThirteen, itemFourteen, itemFifteen, itemSixteen]


return (
    <div>
        <Navbar/>
        <div className="page-wrapper">
            <Heading text="Contacts" buttonText="edit" edit ={true}/>

            <div>
                <Body textList={textList} title="Who to Contact at Seacology"/>
            </div>

            <div className="button-wrapper">
                <Link href="/admin/finances">
                <Button color="blue" size="small" text="back"/>
                </Link>
               
            </div>

        </div>

    </div>
);
}