import Link from "next/link";
import styles from "./style.module.css";
const NavBar = () => {
  return (
    <div className={styles.navBarContainer}>
      <Link className={styles.link} key={"home"} href={"./"}>
        Home
      </Link>
      <Link className={styles.link} key={"contact"} href={"./contact"}>
        Contact
      </Link>
      <Link className={styles.link} key={"about"} href={"./about"}>
        About
      </Link>
      <Link className={styles.link} key={"dashboard"} href={"./dashboard"}>
        Dashboard
      </Link>
    </div>
  );
};

export default NavBar;
