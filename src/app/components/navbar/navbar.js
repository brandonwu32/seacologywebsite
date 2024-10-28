import Link from 'next/link';
import styles from '../navbar/Navbar.css'
import Image from "next/image";
import SeacologyLogo from "../../../../assets/seacology_logo.png"

export default function Navbar() {

    return (
        <>
        <div id="wrapper">
            <div id="navbar-wrapper">
                <div className="img-with-text">
                    <Image src={SeacologyLogo} id='seacology-logo'/>
                    <h1 id="seacology-text">Seacology</h1>
                </div>
                <div className="navbar">
                    <div className="navbar-link">
                        <input type="text" placeholder="Search..." id="search-bar"/>
                    </div>

                    <div className="navbar-link">
                        <a href="#" className="navbar-link">Guidelines</a>
                        <div className="dropdown">
                            <a href="#">Sub-item 1</a>
                            <a href="#">Sub-item 2</a>
                            <a href="#">Sub-item 3</a>
                        </div>
                    </div>

                    <div class="navbar-link">
                        <a href="#" className="navbar-link">Project Management</a>
                        <div className="dropdown">
                            <a href="#">Step 1</a>
                            <a href="#">Step 2</a>
                            <a href="#">Step 3</a>
                            <a href="#">Step 4</a>
                            <a href="#">Step 5</a>
                            <a href="#">Step 6</a>
                        </div>
                    </div>

                    <div class="navbar-link">
                        <a href="#" className="navbar-link">Financial</a>
                        <div className="dropdown">
                            <a href="#">Sub-item 1</a>
                            <a href="#">Sub-item 2</a>
                            <a href="#">Sub-item 3</a>
                        </div>
                    </div>

                    <div className="navbar-link">
                        <a href="#" className="navbar-link">Prize Nominations</a>
                        <div className="dropdown">
                            <a href="#">Sub-item 1</a>
                            <a href="#">Sub-item 2</a>
                            <a href="#">Sub-item 3</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

