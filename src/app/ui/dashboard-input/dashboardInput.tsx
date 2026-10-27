"use client";

import styles from "./styles.module.css";
import { createGame } from "../../lib/actions";

const DashboardInput = () => {
  return (
    <>
      <form className={styles.dashboardInput} action={createGame}>
        <p>Add a game</p>
        <input
          className={styles.input}
          type="text"
          placeholder="Insert the name of your game"
          name="gameName"
        />

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
        <button className={styles.button} type="submit">
          Add Game
        </button>
      </form>
    </>
  );
};

export default DashboardInput;
