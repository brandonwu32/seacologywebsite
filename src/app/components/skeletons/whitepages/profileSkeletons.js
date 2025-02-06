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
                alt="https://media.licdn.com/dms/image/v2/C560BAQFGLEe_yK2JRw/company-logo_200_200/company-logo_200_200/0/1630601534327/seacology_logo?e=1746662400&v=beta&t=pG41ZFN10ckgCxb3Cu5RQiVv0Rbo9SGrcVF1rTf5PFo"
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