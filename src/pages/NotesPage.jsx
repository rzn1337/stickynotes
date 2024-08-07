import React from "react";
import { fakeData as notes } from "../assets/testData";
import NoteCard from "../components/NoteCard";

function NotesPage() {
  return (
    <div>
      {notes.map((note) => (
        <NoteCard key={note.$id} note={note} />
      ))}
    </div>
  );
}

export default NotesPage;
