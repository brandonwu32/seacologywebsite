"use client"
import Navbar from "../../../../components/navbar/navbar";
import Button from '../../../../components/button/button';
import Heading from "../../../../components/info-hub/heading"
import "./step4.css" 
import Body from "../../../../components/info-hub/pages/project-management/body"


export default function Step4() {
    var textList = ["If the board approves a project, we will probably need more information before we can release the  first installment of grant money. For example, we will need a timeline and a map of the protected  area. You will need to coordinate with the community and NGO partner to get these materials. We will also need you to help get two different agreements signed:&nbsp;", "Seacology Field Representative Manual Page 4 of 12 November 2023", "▪ A conservation agreement, signed by community leaders. This is a simple, one-page  agreement that sets out what Seacology and the community are promising to do. It is  important to make sure that the community members understand and agree with the  agreement. Prepare a copy translated into the local language if appropriate.", "▪ A grant agreement, signed by the fiscal administrator and on-site project leader. After the  conservation agreement has been signed and returned, we will send this agreement directly to  the project leader. We welcome your input on these agreements and will send them to you for your review. If you think that changes should be made before the agreements are signed, please let us know right away. Do not  make changes to either agreement without first getting approval from Seacology staff. We typically pay grant funds in two or three installments. Before we send the first payment, we must  receive:","▪ The signed grant agreement.",
         "▪ Instructions for wiring money to the fiscal administrator. (We will ask you for what we need.) Once we receive the signed grant agreement and wiring instructions, Seacology will wire the first  installment payment. We will let you know when we have sent the wire." 

    ]


    return (
        <div className="step4">
            <Navbar/> 
            
            <Heading text = "Projects- Step 4" buttonText = "back"  nextText = "next"/> 

            <div className="step4">
        <Navbar/> 
        
        <Heading text = "Projects- Step 4" buttonText = "back"  nextText = "next"/> 
        <div className="title">
            <Body title = {"Step 4. After Approval: Get Conservation and Grant Agreements Signed"} textList = {textList}></Body>
        </div>
        </div>
     


           
           
           
           
           
           
            {/* <p className="title">
                Step 4. After Approval: Get Conservation and Grant Agreements Signed </p>

            <p className="bodyText"> 
            If the board approves a project, we will probably need more information before we can release the  first installment of grant money. For example, we will need a timeline and a map of the protected  area. You will need to coordinate with the community and NGO partner to get these materials. We will also need you to help get two different agreements signed:&nbsp; 
            </p>
            <p className="randomText">
            Seacology Field Representative Manual Page 4 of 12 November 2023 
            </p>
            <li className="lists">
            ▪ A conservation agreement, signed by community leaders. This is a simple, one-page  agreement that sets out what Seacology and the community are promising to do. It is  important to make sure that the community members understand and agree with the  agreement. Prepare a copy translated into the local language if appropriate. 
            </li>
            <li className="lists">
            ▪ A grant agreement, signed by the fiscal administrator and on-site project leader. After the  conservation agreement has been signed and returned, we will send this agreement directly to  the project leader. 
            We welcome your input on these agreements and will send them to you for your review. If you think that changes should be made before the agreements are signed, please let us know right away. Do not  make changes to either agreement without first getting approval from Seacology staff.  
            We typically pay grant funds in two or three installments. Before we send the first payment, we must  receive:  
           </li>
           <li className="lists"> 
            ▪ The signed grant agreement. 
            </li>
            <li className="lists"> 
            ▪ Instructions for wiring money to the fiscal administrator. (We will ask you for what we need.) Once we receive the signed grant agreement and wiring instructions, Seacology will wire the first  installment payment. We will let you know when we have sent the wire. 
            </li> */}
      

        
        
        
            
           
        </div>
        

    );
}