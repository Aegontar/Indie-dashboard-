"use client";

const EditButton = ({
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
    /*    console.log(`activeId`, activeId), */
    <button onClick={onClick}>
      {activeId === index ? "💾 Save" : "✏️ Edit"}
    </button>
  );
};

export default EditButton;
