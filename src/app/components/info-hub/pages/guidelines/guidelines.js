import styles from "../welcome/welcome.css"
import Bubble from "../../../bubble/bubble"
import Navbar from "../../../navbar/navbar"
import Heading from "../../heading"
import Button from "../../../button/button"
import Body from "../project-management/body"

export default function Guidelines() {
<<<<<<< Updated upstream
    var itemOne = {
        type: "paragraph",
        content: "Here is some information to help you work with Seacology smoothly and efficiently."
    }

    var itemTwo = {
        type: "header",
        content: "Communication"
    }

    var itemThree = {
        type: "paragraph",
        content: "We understand that communication across the globe can be challenging, but because our office is so  far away from our projects, we must be able to get in touch with you by email. If you will be out  of email contact for longer than a few days, please let us know in advance. If you receive an email  from Seacology, it is important that you respond quickly."
    }

    var itemFour = {
        type: "paragraph",
        content: "We will always let you know, well ahead of time, when you need to submit project recommendations, proposals, and updates. It is extremely important to meet these deadlines, so please plan  ahead. If you are having problems providing information we have asked for, let us know so we can  plan accordingly."
    }

    var itemFive = {
        type: "paragraph",
        content: "When you send us a project proposal, progress report, or final report, you must include photos. We like photos of the Seacology-funded infrastructure or benefit, the conservation area, and community members. We use them online and in our newsletters, and show them at board meetings."
    }
    
    var itemSix = {
        type: "paragraph",
        content: "When you send photos, please attach them to an email or share them with us through Google Drive. Please do not embed them in Word documents—that reduces the quality. If you do not have a digital camera, Seacology will reimburse you for the cost of one. Please give us at least two price estimates, so we can approve the expense before you make the purchase."
    }
    
    var itemSeven = {
        type: "paragraph",
        content: "We encourage you to travel to potential or current project sites when appropriate, because there is no substitute for meeting project partners and communities face to face."
    }
    
    var itemEight = {
        type: "paragraph",
        content: "We will pay for travel expenses, if the expense is 1) approved before you make a trip, and 2) backed up with receipts."
    }
    
    var itemNine = {
        type: "paragraph",
        content: "When you ask us to approve travel (or other Seacology-related expenses), please send a budget with an estimate of your expenses. We know that it can be a hardship to use your own funds for expensive items such as plane tickets, so Seacology can advance you funds for approved expenses."
    }
    
    var itemTen = {
        type: "paragraph",
        content: "Here are some general rules on what Seacology pays for and what it doesn’t: Seacology reimburses only economy class airfare, and does not reimburse accommodations at 4- or 5-star hotels. Seacology cannot provide office space or reimburse you for personal items such as clothing or footwear."
    }
    
    var itemEleven = {
        type: "paragraph",
        content: "We can reimburse you for expenses only if you send us receipts (and invoices, if appropriate). If a vendor does not give you a receipt, please provide your own and have the vendor sign it. Stationery and office supply shops generally sell inexpensive receipt booklets."
    }
    
    var itemTwelve = {
        type: "paragraph",
        content: "Please send us reimbursement requests, invoices, and receipts within a month after you incur the expenses."
    }

    var itemThirteen = {
        type: "header",
        content: "Deadlines"
    }

    var itemFourteen = {
        type: "header",
        content: "Photos"
    }

    var itemFifteen = {
        type: "header",
        content: "Travel Expenses"
    }

    var textList = [
        itemOne, itemTwo, itemThree, itemThirteen, itemFour, itemFourteen, itemFive, itemSix, itemFifteen,
         itemSeven, itemEight, itemNine, itemTen, itemEleven, itemTwelve
    ]

=======
>>>>>>> Stashed changes
    return (
        <div>
            <Navbar/>
            <div className="page-wrapper">
                <Heading text="Guidelines" buttonText = 'edit'/>

                <div>
<<<<<<< Updated upstream
                    <Body textList={textList} title="Guidelines for Working With Seacology"/>
                </div>

                <div className="button-wrapper">
                    <Button color="blue" size="small" text="back"/>
                    <Button color="blue" size="small" text="next"/>
=======
                    <Button color="blue" size="small" text="back"/>
                </div>

                <div>
                    <h1 className="pm-overview-h1">Guidelines for Working With Seacology</h1>
                </div>

                <div>
                    <Body text="Here is some information to help you work with Seacology smoothly and efficiently."/>
                </div>

                {/* How to bold text in body?? And how to do it through the body component */}
                <div>
                    <h1 className="pm-overview-h1">Communication</h1>
                    <Body text="We understand that communication across the globe can be challenging, but because our office is so  far away from our projects, we must be able to get in touch with you by email. If you will be out  of email contact for longer than a few days, please let us know in advance. 
                    If you receive an email  from Seacology, it is important that you respond quickly. "/>
>>>>>>> Stashed changes
                </div>
            </div>
        </div>
    );
}