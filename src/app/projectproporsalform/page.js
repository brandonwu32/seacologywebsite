import Bubble from "../components/bubble/bubble";
import button from "../components/button/button";
import styles from "./page.css";

export default function ProjectProposalPage() {
  return (
    <div className="page">
      <h1 className="heading">New Project Proposal</h1>
      <div className="form-container">
        
        <div className="form-fields">
          <label>Full Name:<input type="text" /></label>
          <label>Time area will be protected:<input type="text" /></label>
          <label>Address:<input type="text" /></label>
          <label>Confirmation of ownership of protected area:<input type="text" /></label>
          <label>Phone:<input type="text" /></label>
          <label>Number of people in the community:<input type="number" /></label>
          <label>Name of fiscal administrator:<input type="text" /></label>
          <label>Estimated total cost of project:<input type="text" /></label>
          <label>Other sources of project funding, if any:<input type="text" /></label>
          <label>Protected area’s size and type:<input type="text" /></label>
          <label>List of protected threatened or endangered species in the area, if any:<textarea /></label>
          <label>Any conflicts of interest:<textarea /></label>
          <label>Detailed information about how the community will protect the proposed protected area:<textarea /></label>
        
        </div>

        <div className="upload-bubbles">
          <Bubble heading="Upload Files" subtext=".pdf" />
          <Bubble heading="Upload Image" subtext=".png" />
        </div>
      </div>

     
      <div className="button-container">
        <button className="close-button">close</button>
        <button className="enter-button">enter</button>
      </div>
    </div>
  );
}


