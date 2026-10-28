"use client";

import { updateGame } from "@/app/lib/actions";
/* import styles from "./styles.module.css"; */
/* import { useEffect, useState } from "react"; */
import styles from "./styles.module.css";

type EditGameLayoutProps = {
  gameId: string;
  gameName: string;
  genre: string;
  id: number;
  setActiveId: React.Dispatch<React.SetStateAction<number | null>>;
};

const EditGameLayout = (props: EditGameLayoutProps) => {
  console.log(`Current Game Name`, props.gameName, `id`, props.gameId);
  return (
    <form className="edit-game-layout" action={updateGame}>
      <h1>Edit Game</h1>
      <p>Game editing functionality goes here.</p>
      <input
        type="text"
        placeholder="Game Name"
        defaultValue={props.gameName || ""}
        name="gameName"
      />
      {/*    <input type="text" placeholder="Genre" name="genre" /> */}

      <label className={styles.label}>
        Choose a genre:
        <select className={styles.select} name="genre">
          <option className={styles.option} value="rts">
            Real-Time Strategy
          </option>
          <option className={styles.option} value="fps">
            First-Person Shooter
          </option>
          <option className={styles.option} value="rpg">
            Role-Playing Game
          </option>
          <option className={styles.option} value="mmorpg">
            Massively Multiplayer Online Role-Playing Game
          </option>
          <option className={styles.option} value="adventure">
            Adventure
          </option>
          <option className={styles.option} value="simulation">
            Simulation
          </option>
        </select>
      </label>
      <input type="hidden" name="gameId" defaultValue={props.gameId || ""} />
      <input type="hidden" name="id" defaultValue={props.id || ""} />
      <button type="submit">Save Changes</button>
      <button type="button" onClick={() => props.setActiveId(null)}>
        {" "}
        Cancel editing
      </button>
    </form>
  );
};

export default EditGameLayout;
