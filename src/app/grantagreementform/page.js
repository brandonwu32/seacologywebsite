import Bubble from "../components/bubble/bubble";
import button from "../components/button/button";
import styles from "./page.css";

export default function ConservationAgreementPage() {
  return (
    <div className="agreement-page">
      <h1 className="agreement-heading">Grant Agreement</h1>
      <div className="agreement-container">
        
        <div className="form-fields">
          <label>Last name:<input type="text" /></label>
          <label>First name:<input type="text" /></label>
          <label>Electronic Signature:<input type="text" /></label>
          <label>Date:<input type="date" /></label>
        </div>

        <div className="agreement-text-box">
          <p>
            one-page agreement that sets out what Seacology and the community 
            are promising to do. It is important to make sure that the community 
            members understand and agree with the agreement
          </p>
        </div>
      </div>

      <div className="button-container">
        <button className="agree-button">Agree</button>
      </div>
    </div>
  );
}
