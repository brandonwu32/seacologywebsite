import InfoPageBubble from "../../whitepagebubbles/infobubble/infobubble"
import "./profileSkeletons.css";
import seacology_Logo from "../../../../../assets/seacology_logo.png";
import default_profile from "../../../../../assets/default_profile.jpg";

export default function ProfileSkeletons() {
    const data = [
        {
            name: '',
            email: '',
            position: '',
            admin: false
        },
        {
            name: '',
            email: '',
            position: '',
            admin: false
        },
        {
            name: '',
            email: '',
            position: '',
            admin: false
        },
        {
            name: '',
            email: '',
            position: '',
            admin: false
        },
        {
            name: '',
            email: '',
            position: '',
            admin: false
        },
        {
            name: '',
            email: '',
            position: '',
            admin: false
        },
        {
            name: '',
            email: '',
            position: '',
            admin: false
        },
    ]
  function bubbleMember(item) {
    return (
      <InfoPageBubble
                src={default_profile}
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