'use server'
import InfoPageBubble from "../components/whitepagebubbles/infobubble/infobubble";
import { fetchMembers } from "../lib/data";
import seacology_Logo from "../../../assets/logo-blue-web-transparent.png";
import styles from "./page.css";

export async function MemberList() {
    const whiteList = await fetchMembers();
    return(whiteList.map(function (member){
        return (
            <div className = "WPbubble-wrapper" key={member.email}>
            <InfoPageBubble 
                src={seacology_Logo} 
                alt="CeoPic"
                name={member.name}
                position={member.position}
                email={member.email}
            />
            </div>
        )
    }));
        
}

