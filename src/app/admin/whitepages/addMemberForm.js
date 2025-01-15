
import "./page.css";
import { useState } from "react";
import { addMember } from '../../lib/actions';


export default function AddMemberForm(props) {
  const [newMember, setNewMember] = useState({ name: "", position: "", email: "", region: "", image: null });

  const add = async () => {
    try {
      const image = 'https://media.licdn.com/dms/image/v2/D5603AQF1ui6894vyAg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1682477070552?e=1740614400&v=beta&t=GHHFP5uKz-QxtCyqCRWWc0mrAxLsQZK-K9zXFjXSJwE';
      const result = await addMember(newMember.name, newMember.email, newMember.position, newMember.password, newMember.admin, image);
    } catch (error) {
      console.error("Error adding member:", error);
    }
  };

  function handleSubmit() {

    const member = {
      name: newMember.name,
      position: newMember.position,
      email: newMember.email,
      password: newMember.password,
      admin: newMember.admin
    };

    console.log("Adding Member:", member);

    // Call the onAdd callback to update parent state
    console.log("hello")
    add();

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

  return (
    <form className="AddMemberForm" onSubmit={handleSubmit}>
      {renderInput("Name", "name")}
      {renderInput("Position", "position")}
      {renderInput("Email", "email")}
      <button type="submit" onClick = {() => handleSubmit()}>Add Member</button>
    </form>
  );
}
