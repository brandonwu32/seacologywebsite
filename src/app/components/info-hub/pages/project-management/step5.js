"use client"
import Navbar from "../../../../components/navbar/navbar";
import Button from '../../../../components/button/button';
import Heading from "../../../../components/info-hub/heading"
import "./step4.css" 
import Body from "../../../../components/info-hub/pages/project-management/body"


export default function Step5() {
    var itemOne = {
        type: "paragraph",
        content:"We rely on our field reps to keep us informed about how projects are going, so we encourage you to  send informal updates at any time. Please share both good and bad news! We understand that  challenges arise, and that they can be beyond your control and the project leader’s control. If a project  runs into delay or difficulty, we need to know as soon as possible, so that we can try to help, and so  we can keep our board and funders informed. "
    }
    var itemTwo = {
        type: "paragraph",
        content: "If circumstances have changed, and the community wants to change how they spend grant funds,  they must get approval from Seacology before making the change."
    }
    var itemThree = {
        type: "paragraph",
        content: "In addition to informal communications, we require regular reports on all active projects. You must  send us a progress report when:"
    }
    var itemFour = {
        type: "paragraph",
        content: "▪ A Seacology board meeting is coming up. (Typically, reports are due in December and May.  We will remind you well in advance.) AND"
    }
    var itemFive = {
        type: "paragraph",
        content: "▪ The community is ready for the next installment of the grant."
    }
    var itemSix = {
        type: "paragraph",
        content:"These reports must include:"
    }
    var itemSeven = {
        type: "paragraph",
        content:"1. A narrative report describing the work that has been done, the work that is not yet  completed, AND the conservation efforts. This should be brief–a paragraph or two."
    }
    var itemEight = {
        type: "paragraph",
        content: "2. Photos showing the completed work and the conservation area."
    }
    var itemNine = {
        type: "paragraph",
        content: "3. And, if the community is asking for the next installment: A financial report (in Excel) showing how project funds have been spent. "
    }
    var itemTen = {
        type: "paragraph",
        content: "Financial reports. When it is time to prepare a financial report, please contact Seacology, so we can send you an Excel spreadsheet for the fiscal administrator to fill out. The report needs to compare every line of the original budget with how much money (in local currency) actually been spent. We  may ask you to provide more detail on certain budget line items."
    }
    var itemEleven = {
        type: "paragraph",
        content: "It is your responsibility to read the fiscal administrator’s financial report carefully and make sure that  it includes all the information Seacology needs. Please do not send us a financial report without  first making sure it is clear and complete. If you submit the report, we will assume that you  approve the next payment. If you think that we should not send the next payment yet, please tell us."
    }
    var itemTwelve = {
        type: "paragrpah",
        content: "Seacology Field Representative Manual Page 5 of 12 November 2023"
    }
    var itemThriteen = {
        type: "paragraph",
        content:"Receipts. Project leaders should use reputable contractors and vendors who will provide good  invoices and receipts. If the receipt does not say exactly what was received, attach a materials list  and/or note the service provided."
    }
    var itemFourteen = {
        type: "paragraph",
        content: "If the NGO is the fiscal administrator, you don’t need to send all the receipts with the financial  reports, but later, we will ask you to provide some receipts."
    }
    var itemFiveteen = {
        type: "paragraph",
        content:"If you, or another individual not associated with a partner NGO, are personally serving as the fiscal  administrator, include receipts for all expenses. Identify the vendor and type of expense."
    }
    

    var textList = [itemOne, itemTwo, itemThree, itemFour, itemFive, itemSix, itemSeven, itemEight, itemNine, itemTen, itemEleven, itemTwelve, itemThriteen, itemFourteen, itemFiveteen]



    return (
        <div>
            <Navbar/> 
            <div className="page-wrapper">
                <Heading text="Step 5" buttonText="edit"/>
                
                <div>
                    <Body textList={textList} title="Step 5. Review and Send Progress Reports"/>
                </div>

                <div className="button-wrapper">
                    <Button color="blue" size="small" text="back"/>
                    <Button color="blue" size="small" text="next"/>
                </div>

            </div>
           
        </div>
     
           

        

    );
}