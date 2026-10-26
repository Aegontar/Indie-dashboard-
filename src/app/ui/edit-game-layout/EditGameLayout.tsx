"use client";

import { updateGame } from "@/app/lib/actions";
/* import styles from "./styles.module.css"; */
import { useEffect, useState } from "react";

type EditGameLayoutProps = {
  gameId: string;
  gameName: string;
  genre: string;
  id: number;
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
      <input type="text" placeholder="Genre" name="genre" />
      <input type="hidden" name="gameId" defaultValue={props.gameId || ""} />
      <input type="hidden" name="id" defaultValue={props.id || ""} />
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditGameLayout;
