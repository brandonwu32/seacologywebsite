
import Image from "next/image";
import Button from './components/button/button';
import logo from '/assets/logo-blue-web-transparent.png';
import styles from "./page.css";

export default function Home() {
  return (
    <div className="page">
      <div className="image-container">
      <Image src={logo} alt="Seacology Logo" className="seacology-logo"/>
      <div className = "login-area-mobile"> 
        <Button color = "blue" size = "large" text = "Log in" className="login-button"/>
      </div>

      </div>
      <div className="main-content">
        <div className="top-bar">
          <div className = "login-area">
            <Button color = "blue" size = "large" text = "Log in"/>
          </div>
        </div>
        <div className = "bottom-bar"> </div>
      <div className="button-bar">
        {/* <Button color="blue" size = "large" text = "Submit Update"/>
        <Button color="blue" size = "large" text = "Info Hub"/>
        <Button color="blue" size="large" text="White Pages" /> */}
      </div>

      </div>
    </div>
  )}