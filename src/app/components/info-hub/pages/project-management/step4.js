"use client"
import Navbar from "../../../../components/navbar/navbar";
import Button from '../../../../components/button/button';
import Heading from "../../../../components/info-hub/heading"
import "./step4.css" 
import Body from "../../../../components/info-hub/pages/project-management/body"


export default function Step4() {
    
    return (
        <div className="step4">
            <Navbar/> 
            
            <Heading text = "Projects- Step 4" buttonText = "back"  nextText = "next"/> 


            <p className="title">
                Step 4. After Approval: Get Conservation and Grant Agreements Signed </p>

            <p className="bodyText"> 
            If the board approves a project, we will probably need more information before we can release the  first installment of grant money. For example, we will need a timeline and a map of the protected  area. You will need to coordinate with the community and NGO partner to get these materials.  
We will also need you to help get two different agreements signed:

            </p>
        
        
        
            
           
        </div>
        

    );
}