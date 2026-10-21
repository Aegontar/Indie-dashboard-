"use client";

import { useEffect, useState } from "react";

const EditButton = ({
  gameId,
  activeId,
  index,
  onClick,
}: {
  gameId: string;
  activeId: number | null;
  index: number;
  onClick: () => void;
}) => {
  return (
    console.log(`activeId`, activeId),
    (
      <button onClick={onClick}>
        {activeId === index ? "✏️ Edit" : "💾 Save"}
      </button>
    )
  );
};

export default EditButton;
