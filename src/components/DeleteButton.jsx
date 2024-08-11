import React from "react";
import { Trash } from "../icons";
import { service as appwriteService } from "../appwrite/config";

function DeleteButton({ noteID, setNotes }) {
  const handleDelete = () => {
    setNotes((notes) => notes.filter((note) => note.$id !== noteID))
  };

  return (
    <div onClick={handleDelete}>
      <Trash />
    </div>
  );
}

export default DeleteButton;
