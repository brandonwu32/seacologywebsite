
import InfoPageBubble from "../../components/whitepagebubbles/infobubble/infobubble";
import "./page.css";
import { fetchMembers } from "../../lib/data";


export default async function WhitepagesRenderer() {
  const data = await fetchMembers();

  function bubbleMember(item) {
    console.log(item.name)
    return (
      <InfoPageBubble
                image={item.image}
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