"use client"
import Navbar from "../../../../components/navbar/navbar";
import Button from '../../../../components/button/button';
import Heading from "../../../../components/info-hub/heading"
import "./step4.css" 
import Body from "../../../../components/info-hub/pages/project-management/body"


export default function Step5() {
    var textList = ["We rely on our field reps to keep us informed about how projects are going, so we encourage you to send informal updates at any time. Please share both good and bad news! We understand that challenges arise, and that they can be beyond your control and the project leader’s control. If a project runs into delay or difficulty, we need to know as soon as possible, so that we can try to help, and so we can keep our board and funders informed. If circumstances have changed, and the community wants to change how they spend grant funds, they must get approval from Seacology before making the change. In addition to informal communications, we require regular reports on all active projects. You must send us a progress report when:",
        "▪ A Seacology board meeting is coming up. (Typically, reports are due in December and May.  We will remind you well in advance.) AND "
    ]
    
    return (
        <div className="step5">
        <Navbar/> 
        
        <Heading text = "Projects- Step 5" buttonText = "back"  nextText = "next"/> 
        <div className="title">
            <Body title = {"Step 5. Review and Send Progress Reports"} textList = {textList}></Body>
        </div>
        {/* <p className="title">
        Step 5. Review and Send Progress Reports 
        </p>

        <p className="bodyText"> 
                {content}
        </p>
        <li className="lists">
            ▪ A Seacology board meeting is coming up. (Typically, reports are due in December and May.  We will remind you well in advance.) AND 
        </li>
        <li className="lists">
        ▪ The community is ready for the next installment of the grant. 
        </li>
        <li className="lists">
        These reports must include: 
        </li>
        <li className="lists">
            1. A narrative report describing the work that has been done, the work that is not yet  completed, AND the conservation efforts. This should be brief–a paragraph or two.  
        </li>
        <li className="lists">
        2. Photos showing the completed work and the conservation area. 
        </li>
        <li className="lists">
        3. And, if the community is asking for the next installment: A financial report (in Excel) showing how project funds have been spent.  
        </li>
        <li className="bodyText"> 
        Financial reports. When it is time to prepare a financial report, please contact Seacology, so we can send you an Excel spreadsheet for the fiscal administrator to fill out. The report needs to compare every line of the original budget with how much money (in local currency) actually been spent. We  may ask you to provide more detail on certain budget line items. 
        It is your responsibility to read the fiscal administrator’s financial report carefully and make sure that  it includes all the information Seacology needs. Please do not send us a financial report without  first making sure it is clear and complete. If you submit the report, we will assume that you  approve the next payment. If you think that we should not send the next payment yet, please tell us.
        </li> */}

  
  </div>
  
  
  
  
  
  
  
  
    );
}