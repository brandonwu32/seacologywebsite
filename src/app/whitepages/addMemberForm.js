
import "./page.css";
import { useState } from "react";

export default function AddMemberForm({ onAdd }) {
  const [newMember, setNewMember] = useState({ name: "", position: "", email: "", region: "", image: "" });

  function handleSubmit(event) {
    event.preventDefault();

    // Simulate a POST request or handle the form submission here
    const member = {
      name: newMember.name,
      position: newMember.position,
      email: newMember.email,
    };

    console.log("Adding Member:", member);

    // Call the onAdd callback to update parent state
    onAdd(member);

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
      <button type="submit">Add Member</button>
    </form>
  );
}
