"use client";

import styles from "./styles.module.css";
import { useEffect } from "react";

type EditGameLayoutProps = {
  editingStatus: boolean;
};

const EditGameLayout = (editingStatus: EditGameLayoutProps) => {
  /*   console.log(`editingStatus`, editingStatus); */

  useEffect(() => {
    console.log(`editingStatus`, editingStatus);
  }, [editingStatus]);
  return (
    <div className={editingStatus ? "display: block" : "display: none"}>
      <h1>Edit Game</h1>
      <p>Game editing functionality goes here.</p>
      <input type="text" placeholder="Game Name" />
      <input type="text" placeholder="Genre" />
      <button>Save Changes</button>
    </div>
  );
};

export default EditGameLayout;
