"use client";
import styles from "./styles.module.css";
import DeleteButton from "../button/DeleteButton";
import EditButton from "../button/EditButton";
import EditGameLayout from "../edit-game-layout/EditGameLayout";
import { useState, useEffect } from "react";

const GameList = ({
  games,
}: {
  games: Array<{
    id: number;
    game_id: string;
    game_name: string;
    genre: string;
  }>;
}) => {
  /*   const [editingStatus, setEditingStatus] = useState(false); */

  const [activeId, setActiveId] = useState(null as number | null);
  const [currentGameName, setCurrentGameName] = useState(null as string | null);
  const [currentGameId, setCurrentGameId] = useState(null as string | null);

  const handleToggle = (index: number) => {
    // If clicked again, close it. Otherwise, open the clicked ID.
    setActiveId(index === activeId ? null : index);
    /*     setEditingStatus(!editingStatus); */
    /*     console.log(`activeId`, activeId); */
  };

  /*   useEffect(() => {
    console.log(`Current Game Name`, currentGameName); 
  }, [currentGameName]);
 */

  console.log(`clicked game id`, currentGameId);

  return (
    <div className="game-list">
      {games.map((game, index) => (
        <div key={game.id} className="game-item-container">
          <div className={styles.gameItem}>
            <p>Game name: {game.game_name}</p>
            <p>Genre: {game.genre}</p>
            <DeleteButton gameId={game.game_id} />
            <EditButton
              gameId={game.game_id}
              key={index}
              activeId={activeId}
              index={index}
              onClick={() => {
                handleToggle(index);
                setCurrentGameName(game.game_name);
                setCurrentGameId(game.game_id);
              }}
              /*    handleToggle={handleToggle} */
            />
            {/*        <button
              key={game.id}
              onClick={() => setEditingStatus(!editingStatus)}
            >
        
            </button> */}

            {/* {activeId === index ? "Save" : "Edit"} */}
          </div>
        </div>
      ))}
      {activeId !== null && (
        <EditGameLayout
          key={currentGameName}
          gameName={currentGameName || ""}
          gameId={currentGameId || ""}
          genre={games[activeId].genre}
          id={games[activeId].id}
        />
      )}
    </div>
  );
};

export default GameList;
