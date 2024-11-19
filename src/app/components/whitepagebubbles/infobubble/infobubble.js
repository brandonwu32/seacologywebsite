import './infobubble.css';
import Image from "next/image";
import WhitePagePopUp from "../../whitepagepopup/infopopup/infopopup";
import { useState } from "react";

export default function InfoPageBubble(props) {
    const [buttonPopUp, setButtonPopUp] = useState(false);
    const [whiteList, setWhiteList] = useState([
        { "name": "tanya", "project": "projectA", "status": "ongoing", "latestupdate": "01-11-2024" },
        { "name": "sophia", "project": "projectA", "status": "ongoing", "latestupdate": "01-10-2024" },
        { "name": "bussy", "project": "projectB", "status": "ongoing", "latestupdate": "02-20-2024" },
        { "name": "camila", "project": "projectC", "status": "ongoing", "latestupdate": "02-23-2024" },
        { "name": "camila", "project": "projectaB", "status": "ongoing", "latestupdate": "02-23-2024" },
        { "name": "tanya", "project": "projectaB", "status": "ongoing", "latestupdate": "02-29-2024" },
        { "name": "sophia", "project": "projectaB", "status": "ongoing", "latestupdate": "02-28-2024" },
        { "name": "renata", "project": "projectB", "status": "ongoing", "latestupdate": "02-27-2024" }
    ]);

    const togglePopUp = () => {
        setButtonPopUp(!buttonPopUp);
    };

    // Function to find all projects for a specific person
    const findProjectsByName = (personName) => {
        return whiteList.filter(item => item.name.toLowerCase() === personName.toLowerCase());
    };

    return (
        <div className="individual-bubble">
            <button onClick={togglePopUp} className="bubble">
                <Image src={props.src} alt="none" className="bubble-image" width={250} height={250} />
            </button>
            <div className="ibdescription">
                <p>{props.name}</p>
                <p>{props.position}</p>
                <p>{props.email}</p>
            </div>
            <WhitePagePopUp
                trigger={buttonPopUp}
                close={togglePopUp}
                name={props.name}
                projects={findProjectsByName(props.name)} // Pass the filtered projects here
            />
        </div>
    );
}
