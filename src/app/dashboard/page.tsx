import type { Metadata } from "next";
/* import styles from "./styles.module.css"; */
import DashboardInput from "../ui/dashboard-input/dashboardInput";
import GameList from "../ui/game-list/GameList";
import fetchGames from ".././lib/actions";
import GameNavBar from "../ui/game-nav-bar/GameNavBar";
import style from "./styles.module.css";

/* import { use } from "react"; */

export const metadata: Metadata = {
  title: "Dashboard",
  description: "This is the user dashboard",
};

export default async function Dashboard() {
  const games = await fetchGames();
  console.log(`list of your games`, games);
  return (
    <main>
      <div className={style.pageContainer}>
        <div className={style.sideBar}>
          <GameNavBar games={games} />
        </div>
        <div className={style.mainContent}>
          <DashboardInput />
          <GameList games={games} />
        </div>
      </div>
    </main>
  );
}
