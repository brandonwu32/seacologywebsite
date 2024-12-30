import InfoPageBubble from "../../whitepagebubbles/infobubble/infobubble"
import "./profileSkeletons.css";

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
            <div key={item.id}>{bubbleMember(item)}</div>
        )}
      </div>
    );
  }