"use client"
import Navbar from "../../../../components/navbar/navbar";
import Button from '../../../../components/button/button';
import Heading from "../../../../components/info-hub/heading"
import "./step4.css" 
import Body from "../../../../components/info-hub/pages/project-management/body"


export default function Step4() {
    var itemOne = {
        type: "paragraph",
        content:"the board approves a project, we will probably need more information before we can release the  first installment of grant money. For example, we will need a timeline and a map of the protected  area. You will need to coordinate with the community and NGO partner to get these materials.  "
    }
    var itemTwo = {
        type: "paragraph",
        content: "We will also need you to help get two different agreements signed:"
    }
    var itemThree = {
        type: "paragraph",
        content: "Seacology Field Representative Manual Page 4 of 12 November 2023"
    }
    var itemFour = {
        type: "paragraph",
        content: "▪ A conservation agreement, signed by community leaders. This is a simple, one-page  agreement that sets out what Seacology and the community are promising to do. It is  important to make sure that the community members understand and agree with the  agreement. Prepare a copy translated into the local language if appropriate."
    }
    var itemFive = {
        type: "paragraph",
        content: "▪ A grant agreement, signed by the fiscal administrator and on-site project leader. After the  conservation agreement has been signed and returned, we will send this agreement directly to  the project leader."
    }
    var itemSix = {
        type: "paragraph",
        content:"We welcome your input on these agreements and will send them to you for your review. If you think that changes should be made before the agreements are signed, please let us know right away. Do not  make changes to either agreement without first getting approval from Seacology staff."
    }
    var itemSeven = {
        type: "paragraph",
        content: "We typically pay grant funds in two or three installments. Before we send the first payment, we must  receive:"
    }
    var itemEight = {
        type: "paragraph",
        content: "▪ The signed grant agreement."
    }
    var itemNine = {
        type: "paragraph",
        content: "▪ Instructions for wiring money to the fiscal administrator. (We will ask you for what we need.) Once we receive the signed grant agreement and wiring instructions, Seacology will wire the first  installment payment. We will let you know when we have sent the wire."
    }
    

    var textList = [itemOne, itemTwo, itemThree, itemFour, itemFive, itemSix, itemSeven, itemEight, itemNine]



    return (
        <div>
            <Navbar/> 
            <div className="page-wrapper">
                <Heading text="Step 4" buttonText="edit"/>
                
                <div>
                    <Body textList={textList} title="Step 4: After Approval Get Conservation and Grant Agreements Signed"/>
                </div>

                <div className="button-wrapper">
                    <Button color="blue" size="small" text="back"/>
                    <Button color="blue" size="small" text="next"/>
                </div>

            </div>
           
        </div>
     
           

        

    );
}