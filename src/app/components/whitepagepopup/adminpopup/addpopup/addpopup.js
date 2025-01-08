import './addpopup.css';
import Button from '../../../button/button';
import { useState } from 'react';
import { addMember } from '../../../../lib/actions';


export default function AddPopUp(props) {
  const [newMember, setNewMember] = useState({
    name: '',
    password: '',
    email: '',
    admin: '',
    position: '',
    image: '',
  });

  const add = async () => {
    try {
      console.log("Inside async function");
      const result = await addMember(newMember.name, newMember.email, newMember.position, newMember.password, newMember.admin, newMember.image);
    } catch (error) {
      console.error("Error adding member:", error);
    }
  };

  function handleSubmit() {
    const member = {
      name: newMember.name,
      password: newMember.password,
      email: newMember.email,
      position: newMember.position,
      admin: newMember.admin,
      image: newMember.image,
    };

    console.log('Adding Member:', member);

    // Call the onAdd callback to update parent state
    add();

    // window.location.reload();
  }

  function renderInput(placeholder, field) {
    return (
      <input
        type={field === 'email' ? 'email' : 'text'}
        placeholder={placeholder}
        value={newMember[field]}
        onChange={(e) =>
          setNewMember({ ...newMember, [field]: e.target.value })
        }
      />
    );
  }

  function renderDropdown(field) {
    return (
      <select
        value={newMember[field]}
        onChange={(e) =>
          setNewMember({ ...newMember, [field]: e.target.value })
        }
      >
        <option value="">Select Admin Status</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
    );
  }

  return props.trigger ? (
    <div className="appopupOverlay">
      <div className="appopup">
        <div className="aprectangle">
          <p className="apname">Add Member</p>
          <hr className="apyellowline" />
          <div className="addcontainer">
            <div className="apadd-fields">
              
                {renderInput('Name', 'name')}
                {renderInput('Password', 'password')}
                {renderInput('Email', 'email')}
                {renderInput('Position', 'position')}
                <label>Admin:</label>
                {renderDropdown('admin')}
                <label>Image:</label>
                {renderInput('Image', 'image')}
              
                <button color="blue" size="large" onClick={handleSubmit}>
                  Add Member
                </button>
            </div>
          </div>
        </div>
        <div className="apbuttonz">
          <Button color="blue" size="large" text="Close" onClick={props.close} />
        </div>
      </div>
    </div>
  ) : null;
}
