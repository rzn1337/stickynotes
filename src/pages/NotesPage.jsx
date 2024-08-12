import React, { useEffect, useState, useContext } from "react";
// import { fakeData as notes } from "../assets/testData";
import NoteCard from "../components/NoteCard";
import { NoteContext } from "../context/NoteContext";
import Controls from "../components/Controls";
import ThemeButton from "../components/ThemeButton";

function NotesPage() {
  const { notes } = useContext(NoteContext);

  return (
    <>
      <ThemeButton />
      <div>
        {notes.map((note) => (
          <NoteCard key={note.$id} note={note} />
        ))}
        <Controls />
      </div>
    </>
  );
}

export default NotesPage;
