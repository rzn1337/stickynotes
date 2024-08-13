import React from "react";
import { useContext } from "react";
import { NoteContext } from "../context/NoteContext";
import { service as appwriteService } from "../appwrite/config";

function Color({ color }) {
  const { selectedNote, notes, setNotes } = useContext(NoteContext);

  const changeColor = () => {
    
      try {

        if (selectedNote === null || selectedNote === undefined) throw new Error

        const currentNoteIndex = notes.findIndex(
          (note) => note.$id === selectedNote.$id
        );
        const updatedNote = {
          ...notes[currentNoteIndex],
          colors: JSON.stringify(color),
        };

        appwriteService.updateNote(updatedNote.$id, {
          colors: JSON.stringify(color),
        });

        const newNotes = [...notes];
        newNotes[currentNoteIndex] = updatedNote;
        setNotes(newNotes);
      } catch (error) {
        alert("Select a note to change color");
      }
  };

  return (
    <div
      className="color"
      onClick={changeColor}
      style={{ backgroundColor: color.colorHeader }}
    ></div>
  );
}

export default Color;
