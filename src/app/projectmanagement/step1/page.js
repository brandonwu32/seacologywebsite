'use client'

import styles from "./page.css"
import Navbar from "../../components/navbar/navbar";
import Button from '../../components/button/button';
import Bubble from "../../components/bubble/bubble";
import Heading from "../../components/info-hub/heading"
import Body from "../../components/info-hub/pages/project-management/body";
import Link from "next/link"

export default function Step1() {
    var itemOne = {
        type: "paragraph",
        content: "Finding a new project can be hard! See below for some of our advice on identifying good Seacology Projects and New Project Proposal Conversation that may help build the project framework."
    };
    
    var itemTwo = {
        type: "paragraph",
        content: "In the ideal Seacology project, an island community agrees to protect some part of the natural environment, such as a coral reef, rainforest, or mangrove forest. In exchange for this commitment, Seacology funds a community benefit, such as a community center, water system, alternative energy system, or school. Seacology does not fund salaries, scientific research, diesel generators, or motorized boats or other vehicles."
    };
    
    var itemThree = {
        type: "paragraph",
        content: "The community must be truly motivated to protect its environment, and have a firm plan for conservation. The benefit provided to the community must be appropriate, fair, and practical. You should visit the community and talk to as many people as you can—men and women, elders and youth. For more on finding likely projects, see “Identifying Good Seacology Projects” at the end of this document."
    };
    
    var itemFour = {
        type: "paragraph",
        content: "When you are talking to community members, it is easy to raise hopes. Be sure to respectfully let the community know that funding is not guaranteed until the board approves the project. Seacology funds are limited, and we cannot fund all the requests we get for great projects. Please help guard against disappointment in the event that Seacology decides not to fund the project."
    }
        
    var textList = [itemOne, itemTwo, itemThree, itemFour]    
    return (  
        <div>
            <Navbar/>
            <div className="page-wrapper">
                <Heading text="Step 1" buttonText="edit"/>
                <div>
                    <Body textList={textList} title="Step 1: Find a New Project"/>
                </div>
                <div className="step1-row1-wrapper">
                    <div className="link-bubble-wrapper">
                        <Link href="/projectmanagement/identifyingproj">
                            <Bubble midtext="Identifying Good Seacology Projects" width={'16rem'} height={'16rem'}/>
                        </Link>
                    </div>
                    <div className="link-bubble-wrapper">
                        <Link href="/projectmanagement/newprojproposal">
                            <Bubble midtext="New Project Proposal Conversation" width={'16rem'} height={'16rem'}/>
                        </Link>
                    </div>
                </div> 

                <div className="button-wrapper">
                    <Link href="/projectmanagement/pm-overview">
                        <Button color="blue" size="small" text="back"/>
                    </Link>
                    
                    <Link href="/projectmanagement/step2">
                        <Button color="blue" size="small" text="next"/>
                    </Link>
                </div>
            </div>
        </div>
    );
}