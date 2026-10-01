/* import Image from "next/image"; */
import styles from "./page.module.css";
import Login from "./components/log-in-form/Login";
import NavBar from "./components/navBar/NavBar";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>Home page</main>
      <Login></Login>
      <NavBar />
    </div>
  );
}
