"use client";

/* import styles from "./styles.module.css"; */
import { useEffect, useState } from "react";

type EditGameLayoutProps = {
  gameName: string;
};

const EditGameLayout = (props: EditGameLayoutProps) => {
  /*   const { gameName } = props; */
  /*   const [updatedGameName, setUpdatedGameName] = useState(null as string | null);

   const visibleTodos = getFilteredTodos(todos, filter); */

  /*   useEffect(() => {
    setUpdatedGameName(gameName);
  }, [gameName]); */
  /*    */

  /*   useEffect(() => {
    console.log(`editingStatus`, gameName);
  }, [gameName]); */

  /*   useEffect(() => {
    setUpdatedGameName(props.gameName);
  }, [props.gameName]); */

  /*   useEffect(() => {}, [props.gameName]); */

  console.log(`Current Game Name`, props.gameName);
  return (
    <div className="edit-game-layout">
      <h1>Edit Game</h1>
      <p>Game editing functionality goes here.</p>
      <input
        type="text"
        placeholder="Game Name"
        defaultValue={props.gameName || ""}
      />
      <input type="text" placeholder="Genre" />
      <button>Save Changes</button>
    </div>
  );
};

export default EditGameLayout;
