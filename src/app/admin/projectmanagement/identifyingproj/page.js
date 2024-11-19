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
        content: "1. Identify an underserved region or habitat. Occasionally, organizations or island communities will approach you directly, but generally, you’ll need to reach out to potential partners."
    }

    var item2 = {
        type: "paragraph",
        content: "2. Find a good potential partner—an NGO or community association. Ask leading conservationists for opinions about potential partners’ work in a particular region. Does the organization have a good record, and stable leadership that does not rely on just one person? Smaller NGOs may have more local expertise, but less staff and experience; they sometimes collapse if a leader leaves."
    }

    var item3 = {
        type: "paragraph",
        content: "3. Approach an organization or island community. Be clear that initial discussions are not promises of funding. Funding is never guaranteed until the Seacology board approves it. Seacology has limited funds and unfortunately, cannot fund every good project that it considers."
    }

    var item4 = {
        type: "paragraph",
        content: "4. Explain that Seacology can fund just about any structure that the community wants except religious buildings or those intended for the benefit of only a few people. For example, Seacology has funded ecotourism centers, schools, community centers, dispensaries, guard houses, signs, walkways, water pipes/tanks, micro-hydro projects, solar energy systems, and marine area surveillance equipment. Seacology does not fund research, salaries, conferences, motorboats, or anything that is bad for the environment, such as diesel generators."
    }

    var item5 = {
        type: "paragraph",
        content: "5. When a project is suggested, make sure that:"
    }

    var item6 = {
        type: "bullet-point",
        content: "The NGO intermediary is truly connected to the community. Be sure to get the perspectives of both the NGO and the community."
    }

    var item7 = {
        type: "bullet-point",
        content: "The proposed project represents the needs and wishes of the majority of the community (male and female, and of a variety of ages) and is sufficient to motivate them to protect an area for at least 10 years."
    }

    var item8 = {
        type: "bullet-point",
        content: "Community members are willing, and have the time and energy, to help out with a construction project."
    }

    var item9 = {
        type: "bullet-point",
        content: "There is a realistic plan to transport construction or other materials to the site."
    }

    var item10 = {
        type: "bullet-point",
        content: "The proposed timeline is realistic in light of seasonal weather patterns and other factors."
    }

    var item11 = {
        type: "bullet-point",
        content: "The size of the protected area is manageable, but significant to the community and the environment."
    }

    var item12 = {
        type: "bullet-point",
        content: "The conservation measures the community is willing to take directly address what is causing habitat disturbance or loss."
    }

    var item13 = {
        type: "bullet-point",
        content: "The community is willing and able to abide by a Seacology agreement and can protect the forest or marine area that is to be conserved."
    }

    var item14 = {
        type: "bullet-point",
        content: "You know how you will be able to evaluate and report on the effectiveness of the conservation measures required by the agreement."
    }

    var textList = [
        item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12, item13, item14
    ]

    return (
        <div>
            <Navbar/>
            <div className="page-wrapper">
                <Heading text="Identifying Projects" buttonText="edit" edit ={true}/>

                <div>
                    <Body textList={textList} title="Identifying Good Seacology Projects"/>
                </div>

                <div className="button-wrapper">
                    <Link href="/admin/projectmanagement/step1">
                        <Button color="blue" size="small" text="back"/>
                    </Link>

                    <Link href="/admin/projectmanagement/newprojproposal">
                        <Button color="blue" size="small" text="next"/>
                    </Link>
                </div>
            </div>
        </div>
    );
}