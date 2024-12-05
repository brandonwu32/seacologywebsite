
import InfoPageBubble from "../components/whitepagebubbles/infobubble/infobubble";
import "./page.css";
import { fetchMembers } from "../lib/data";
import seacology_Logo from "../../../assets/logo-blue-web-transparent.png";
import { useEffect, useState } from "react";


export default async function WhitepagesRenderer() {
  const data = await fetchMembers();

  function bubbleMember(item) {
    console.log(item.name)
    return (
      <InfoPageBubble
                src={seacology_Logo}
                alt="CeoPic"
                name={item.name}
                position={item.position}
                email={item.email}
            />
    )
  }
    return (
      <div className = "WPbubble-container">
        {data.map((item) =>
            bubbleMember(item)
        )}
      </div>
    );
  }