import React, { useContext } from "react";
import { Trash } from "../icons";
import { service as appwriteService } from "../appwrite/config";
import { NoteContext } from "../context/NoteContext";

function DeleteButton({ noteID }) {
  const { setNotes } = useContext(NoteContext);
  const handleDelete = () => {
    setNotes((notes) => notes.filter((note) => note.$id !== noteID));
    appwriteService.deleteNote(noteID);
  };

  return (
    <div onClick={handleDelete}>
      <Trash />
    </div>
  );
}

export default DeleteButton;
