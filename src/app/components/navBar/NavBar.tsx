import Link from "next/link";
const NavBar = () => {
  return (
    <div>
      <Link key={"home"} href={"./"}>
        Home
      </Link>
      <Link key={"contact"} href={"./contact"}>
        Contact
      </Link>
      <Link key={"about"} href={"./about"}>
        About
      </Link>
      <Link key={"dashboard"} href={"./dashboard"}>
        Dashboard
      </Link>
    </div>
  );
};

export default NavBar;
