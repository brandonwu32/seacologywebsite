import Link from 'next/link';
import styles from '../navbar/Navbar.css'
import Image from "next/image";
import SeacologyLogo from "../../../../assets/seacology_logo.png"

export default function Navbar() {

    return (
        <>
        <div class="wrapper">
            <div class="sidebar">
                <Image src={SeacologyLogo} className='test'/>
                <h2 id='seacology-navbar-h2'>Seacology</h2>
                <ul>
                    <li><a href="#"><i class="fas fa-home"></i>Guidelines</a></li>
                    <li><a href="#"><i class="fas fa-user"></i>Project Management</a></li>
                    <li><a href="#"><i class="fas fa-address-card"></i>Financial</a></li>
                    <li><a href="#"><i class="fas fa-project-diagram"></i>Prize Nominations</a></li>
                </ul>   
            </div>
        </div>
        </>
    );
}

