"use client"
import Navbar from "../../../../components/navbar/navbar";
import Button from '../../../../components/button/button';
import Heading from "../../../../components/info-hub/heading"
import "./step4.css" 
import Body from "../../../../components/info-hub/pages/project-management/body"


export default function Step6() {
    var textList = ["If there is a ceremony to mark the completion of a project, attend if you can. We will reimburse your  travel expenses, if the Seacology program manager has authorized them before your trip.",
        "A final report is due from you or the partner NGO within three months after the project is complete.  If you believe this deadline will not be met, inform Seacology staff as soon as you can. Like previous  progress reports, the final report must include a narrative report on the completed project and  conservation area and photos. It must also include a final financial report of how all Seacology grant  funds were spent, including a comparison of actual expenditures to the original budget. We may  request line-item detail and receipts.  If the project was finished under budget, talk to us about what to do with the leftover funds. "

    ]

    return (
        <div className="step6">
            <Navbar/> 
            
            <Heading text = "Projects- Step 6" buttonText = "back"  nextText = "next"/> 

            <div className="step6">
        <Navbar/> 
        
        <Heading text = "Projects- Step 6" buttonText = "back"  nextText = "next"/> 
        <div className="title">
            <Body title = {"Step 6. Submit the Final Report"} textList = {textList}></Body>
        </div>
        </div>
        </div>


        );
          }