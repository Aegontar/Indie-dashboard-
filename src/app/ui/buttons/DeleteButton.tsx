"use client";

/* import type { ButtonHTMLAttributes } from "react";

type DeleteButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">; */

import { deleteGame } from "@/app/lib/actions";

const DeleteButton = ({ gameId }: { gameId: string }) => {
  const handleClick = () => {
    // Implement the delete functionality here
    console.log("Delete button clicked", gameId);
    deleteGame(gameId);
  };

  return <button onClick={handleClick}>🗑️ Delete</button>;
};

export default DeleteButton;
