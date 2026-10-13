/* import Image from "next/image"; */
import styles from "./page.module.css";
import Login from "./ui/log-in-form/Login";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Login />
      </main>
    </div>
  );
}
