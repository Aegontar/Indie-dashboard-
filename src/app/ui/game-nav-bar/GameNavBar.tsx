import Link from "next/link";
import styles from "./style.module.css";
/* import fetchGames from ".././lib/actions"; */

const GameNavBar = ({
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
    <div>
      <h1>Game list</h1>
      <nav className={styles.gameNavBar}>
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
      </nav>
    </div>
  );
};

export default GameNavBar;
