import Link from "next/link";
import styles from "./style.module.css";
/* import fetchGames from ".././lib/actions"; */

const DashboardNavBar = ({
  games,
}: {
  games: Array<{
    id: number;
    game_id: string;
    game_name: string;
    genre: string;
  }>;
}) => {
  /*   const games = await fetchGames(); */
  return (
    <div className="dashboard-navbar">
      <h1>Game list</h1>

      {games?.map((game) => (
        <Link
          className={styles.link}
          key={game.id}
          /* href={`./games/${game.game_id}`} */
          href={`dashboard/${game.id}`}
        >
          {game.game_name}
        </Link>
      ))}
    </div>
  );
};

export default DashboardNavBar;
