import Link from "next/link";
import { usePathname } from "next/navigation";

const DashboardNavBar = () => {
  const pathname = usePathname();
  return (
    <nav>
      <div className={styles.navBar}>
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
    </nav>
  );
};

export default DashboardNavBar;
