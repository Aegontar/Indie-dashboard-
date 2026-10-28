"use client";

const CancelEditButton = ({
  /*   activeId,
  index, */
  onClick,
}: {
  /*   gameId: string;
  activeId: number | null;
  index: number; */
  onClick: () => void;
}) => {
  return (
    /*    console.log(`activeId`, activeId), */
    <button onClick={onClick}>Cancel</button>
  );
};

export default CancelEditButton;
