
import Image from "next/image";
import Button from './components/button/button';
import logo from '/assets/logo-blue-web-transparent.png';
import styles from "./page.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="page">
      <div className="image-container">
      <Image src={logo} alt="Seacology Logo" />
      </div>
      <div className="main-content">
        <div className="top-bar">
          <div className = "login-area"></div>
          <Link href="/login">
            <Button color = "blue" size = "large" text = "Log in"/>
          </Link>
        </div>
        <div className = "bottom-bar"> </div>
      <div className="button-bar">
      </div>

      </div>
    </div>
  )}