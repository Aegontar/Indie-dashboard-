"use client";
import Link from "next/link";
import styles from "./style.module.css";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();
  return (
    <div className={styles.navBarContainer}>
      <Link
        className={`link ${pathname === "/" ? `${styles.active}` : ""}`}
        key={"home"}
        href={"./"}
      >
        Home
      </Link>
      <Link
        className={`link ${pathname === "/contact" ? `${styles.active}` : ""}`}
        key={"contact"}
        href={"./contact"}
      >
        Contact
      </Link>
      <Link
        className={`link ${pathname === "/about" ? `${styles.active}` : ""}`}
        key={"about"}
        href={"./about"}
      >
        About
      </Link>
      <Link
        className={`link ${pathname === "/dashboard" ? `${styles.active}` : ""}`}
        key={"dashboard"}
        href={"./dashboard"}
      >
        Dashboard
      </Link>
    </div>
  );
};

export default NavBar;
