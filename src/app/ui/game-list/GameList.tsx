"use client";
import styles from "./styles.module.css";
import DeleteButton from "../button/DeleteButton";
import EditButton from "../button/EditButton";
import EditGameLayout from "../edit-game-layout/EditGameLayout";
import { useState, useEffect } from "react";

const GameList = ({
  games,
}: {
  games: Array<{ id: string; game_name: string; genre: string }>;
}) => {
  const [editingStatus, setEditingStatus] = useState(false);

  const [activeId, setActiveId] = useState(null as number | null);

  const handleToggle = (index: number) => {
    // If clicked again, close it. Otherwise, open the clicked ID.
    setActiveId(index === activeId ? null : index);
    /*     console.log(`activeId`, activeId); */
  };

  useEffect(() => {
    /*     console.log(`editingStatus`, activeId); */
  }, [activeId]);

  return (
    <div className="game-list">
      {games.map((game, index) => (
        <div key={game.id} className="game-item-container">
          <div className={styles.gameItem}>
            <p>Game name: {game.game_name}</p>
            <p>Genre: {game.genre}</p>
            <DeleteButton gameId={game.id} />
            <EditButton
              gameId={game.id}
              key={index}
              activeId={activeId}
              index={index}
              onClick={() => handleToggle(index)}
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
      {editingStatus && <EditGameLayout editingStatus={editingStatus} />}
    </div>
  );
};

export default GameList;
