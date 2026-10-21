import type { Metadata } from "next";
/* import styles from "./styles.module.css"; */
import DashboardInput from "../ui/dashboard-input/dashboardInput";
import GameList from "../ui/game-list/GameList";
import fetchGames from ".././lib/actions";

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
      <p>Dashboard</p>
      <DashboardInput />
      <GameList games={games} />
    </main>
  );
}
