"use client"

import styles from "../../page.css"
import Navbar from "../../../components/navbar/navbar";
import Button from '../../../components/button/button';
import Heading from "../../../components/info-hub/heading"
import Body from "../../../components/info-hub/pages/project-management/body";
import Link from "next/link"

export default function Identifying() {
    var item1 = {
        type: "paragraph",
        content: "What conservation measures will the community be taking, and for how long? (Examples Below)"
    }

    var item2 = {
        type: "bullet-point",
        content: "Setting aside a 10-hectare area next to the village as a no-take marine reserve for 20 years."
    }

    var item3 = {
        type: "bullet-point",
        content: "Declaring 100 acres of forest protected for 15 years, and not allowing logging or farming there."
    }

    var item4 = {
        type: "bullet-point",
        content: "Environmental education programs and alternative livelihood training for 10 years."
    }

    var item5 = {
        type: "paragraph",
        content: "What are the biggest threats to the local environment?"
    }

    var item6 = {
        type: "paragraph",
        content: "Please describe the area to be protected: its location, size, and characteristics. What animals and plants live there? Is it a legally protected area? If so, describe the protections in force now."
    }

    var item7 = {
        type: "paragraph",
        content: "Please list any threatened species of plants or animals that live in the protected area."
    }

    var item8 = {
        type: "paragraph",
        content: "How will the community make sure the area is protected? Be as specific as you can. (Examples below)"
    }

    var item9 = {
        type: "bullet-point",
        content: "Community members will train as fish wardens and patrol the marine protected area."
    }

    var item10 = {
        type: "bullet-point",
        content: "Community members will watch over the forest area, which can be reached only by going through the village."
    }

    var item11 = {
        type: "header",
        content: "Community Benefit"
    }

    var item12 = {
        type: "paragraph",
        content: "What community benefit do you want Seacology to fund? (Examples Below)"
    }

    var item13 = {
        type: "bullet-point",
        content: "A community center to use for community-wide meetings, a workspace for women artisans, and tutoring for local children."
    }

    var item14 = {
        type: "bullet-point",
        content: "Freshwater system, including two storage tanks, for 30 houses in the village."
    }

    var item15 = {
        type: "bullet-point",
        content: "A solar power system to provide lighting for 25 homes in our village."
    }

    var item16 = {
        type: "paragraph",
        content: "Why is this project important to the community?"
    }

    var item17 = {
        type: "paragraph",
        content: "Who will lead the project?"
    }

    var item18 = {
        type: "paragraph",
        content: "What organization could receive and manage the Seacology grant money? Please provide name, address, phone, and email."
    }

    var item19 = {
        type: "paragraph",
        content: "How long will it take to complete? Please give your best estimate."
    }

    var item20 = {
        type: "paragraph",
        content: "If land must be acquired for the project (for example, for a building), is it available? Who owns it?"
    }

    var item21 = {
        type: "header",
        content: "The Decision-Making Process"
    }

    var item22 = {
        type: "paragraph",
        content: "How did the community decide on the benefit and conservation area? Did women participate in the process, and were their unique concerns and ideas considered?"
    }

    var item23 = {
        type: "paragraph",
        content: "Please explain how community members chose a project that will truly benefit the entire community."
    }

    var item24 = {
        type: "header",
        content: "Background Information"
    }

    var item25 = {
        type: "paragraph",
        content: "How many people live in the community?"
    }

    var item26 = {
        type: "paragraph",
        content: "How do most people in the community make a living?"
    }

    var item27 = {
        type: "paragraph",
        content: "Will funding for this project come from any other sources in addition to Seacology?"
    }

    var item28 = {
        type: "paragraph",
        content: "Who are the local contacts in the community? Please provide name, address, phone, and email."
    }

    var item29 = {
        type: "paragraph",
        content: "Do you have any reservations or concerns about the project?"
    }

    var textList = [
        item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12, item13, item14, item15,
         item16, item17, item18, item19, item20, item21, item22, item23, item24, item25, item26, item27, item28, item29
    ]
    return (
        <div>
            <Navbar/>
            <div className="page-wrapper">
                <Heading text="New Project Proposal" buttonText="editing" edit ={true}/>

                <div>
                    <Body textList={textList} title="New Project Proposal Conversation"/>
                </div>

                <div className="button-wrapper">
                    <Link href="/admin/projectmanagement/step1">
                        <Button color="blue" size="small" text="back"/>
                    </Link>

                    <Link href="/admin/projectmanagement/step2">
                        <Button color="blue" size="small" text="next"/>
                    </Link>
                </div>
            </div>
        </div>
    );
}