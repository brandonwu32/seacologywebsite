import './addpopup.css'
import Button from '../../../button/button';
import { useState } from 'react';

export default function AddPopUp(props) {
    const [newMember, setNewMember] = useState({ name: "", position: "", email: "", region: "", image: null });

    function handleSubmit(event) {  
     
      const member = {
        name: newMember.name,
        position: newMember.position,
        email: newMember.email,
      };
  
      console.log("Adding Member:", member);
  
      // Call the onAdd callback to update parent state
      console.log("hello")
      props.addFunction(member);
  
      // Reset the form
      setNewMember({ name: "", position: "", email: "" });
    }
  
    function renderInput(placeholder, field) {
      return (
        <input
          type={field === "email" ? "email" : "text"}
          placeholder={placeholder}
          value={newMember[field]}
          onChange={(e) => setNewMember({ ...newMember, [field]: e.target.value })}
        />
      );
    }
    return props.trigger ? (
        <div className="appopupOverlay">
            <div className="appopup">
                <div className='aprectangle'>
                    <p className='apname'>Add Member</p>
                    <hr className="apyellowline" />
                    <div className = 'addcontainer'>
                        <div className = "apadd-fields">
                            {/* figure out how to make thse prefilled */}
                            {/*<label>Full Name:<input id = "name" type="text" /></label>*/}
                            {/*<label>Position:<input id = "position" type="text" /></label>*/}
                            {/*<label>Email:<input id = "email" type="text" /></label>*/}
                            {/*<label>Region:<input id = "region" type="text" /></label>*/}
                            {/*<label>Image:<input id = "image-upload" type="file" /></label>*/}
                            <form className="AddMemberForm" onSubmit={handleSubmit}>
                                {renderInput("Name", "name")}
                                {renderInput("Position", "position")}
                                {renderInput("Email", "email")}
                                <label>Image:<input id = "image-upload" type="file" /></label>
                            </form>
                        </div>
                    </div>
                </div>
                    <div className = 'apbuttonz'>
                        {/* <Button color="blue" size="large" text="Submit" onClick={props.close}/> */}
                        <button color="blue" size="large" type="submit" onClick = {() => handleSubmit()}>Add Member</button>

                        <Button color="blue" size="large" text="Close" onClick={props.close}/>
                </div>
        </div>
        </div>
    ) : null;
    }