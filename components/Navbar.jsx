import Image from "next/image";

import styles from "../styles/Navbar.module.css";
import CampLogo from "../public/images/logo-400x280.webp";

export default function Navbar() {
  return (
    <nav className={styles.mainnav}>
      <ul className={styles.navlist}>
        {/* <li><img src="/images/logo-400x280.webp" height="280" width="400" /></li> */}
        <li className={styles.logoListItem}><Image src={CampLogo} height="280" width="400" /></li>
        <li><a href="#">HOME</a></li>
        <li><a href="#">DIRECTIONS</a></li>
        <li><a href="#">CONTACT US</a></li>
      </ul>
    </nav>
  )
}