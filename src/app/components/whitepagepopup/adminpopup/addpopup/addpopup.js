import './addpopup.css';
import Button from '../../../button/button';
import { useState } from 'react';

export default function AddPopUp(props) {
  const [newMember, setNewMember] = useState({
    name: '',
    password: '',
    email: '',
    admin: '',
    image: null,
  });

  function handleSubmit() {
    const member = {
      name: newMember.name,
      password: newMember.password,
      email: newMember.email,
      admin: newMember.admin,
      image: newMember.image,
    };

    console.log('Adding Member:', member);

    // Call the onAdd callback to update parent state
    props.addFunction(member);

    // Clear the form after submission
    setNewMember({
      name: '',
      password: '',
      email: '',
      admin: '',
      image: null,
    });
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
              <form
                className="AddMemberForm"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}
              >
                {renderInput('Name', 'name')}
                {renderInput('Password', 'password')}
                {renderInput('Email', 'email')}
                <label>Admin:</label>
                {renderDropdown('admin')}
                <label>Image:</label>
                <input
                  id="image-upload"
                  type="file"
                  onChange={(e) =>
                    setNewMember({
                      ...newMember,
                      image: e.target.files[0],
                    })
                  }
                />
                <button color="blue" size="large" type="submit">
                  Add Member
                </button>
              </form>
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
