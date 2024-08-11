import React, { useRef, useContext } from "react";
import { Plus } from "../icons";
import colors from "../assets/colors.json";
import { service as appwriteService } from "../appwrite/config";
import { NoteContext } from "../context/NoteContext";

function AddButton() {

  const {setNotes} = useContext(NoteContext)

  const startingPos = useRef(10);
  const addNote = async () => {
    const payload = {
      position: JSON.stringify({
        x: startingPos.current,
        y: startingPos.current,
      }),
      colors: JSON.stringify(colors[0]),
    };

    startingPos.current += 10;
    const response = await appwriteService.createNote(payload);
    setNotes((prev) => [response, ...prev])
  };

  return (
    <div id="add-btn" onClick={addNote}>
      <Plus />
    </div>
  );
}

export default AddButton;
