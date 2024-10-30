import Bubble from "../components/bubble/bubble"

import Image from "next/image";
import styles from "./page.css";
import Navbar from "../components/navbar/navbar";
import button from "../components/button/button";


export default function Home() {
  return (
    <div className="page">
      
        <Navbar />
  

      <div className="main-content">
        <div className="top-bar">
          <h1 className="welcome-heading">Welcome</h1>
          <button className="login-button">Log In</button>/
        </div>
        <div className = "bottom-bar"></div>
        <div className="bubbles-container">
          <Bubble heading="Guidelines" subtext="blurb" />
          <Bubble heading="Project Management" subtext="blurb" />
          <Bubble heading="Financial" subtext="blurb" />
          <Bubble heading="Contact" subtext="blurb" />
        </div>
      </div>
    </div>
  );
}

