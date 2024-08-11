import React, { useEffect, useState } from "react";
// import { fakeData as notes } from "../assets/testData";
import NoteCard from "../components/NoteCard";
import { service as appwriteService } from "../appwrite/config";

function NotesPage() {

  const [notes, setNotes] = useState([])

  useEffect(() => {
    init()
  }, [])

  const init = async () => {
    const response = await appwriteService.getNotes()
    setNotes(response.documents)
  }

  return (
    <div>
      {notes.map((note) => (
        <NoteCard key={note.$id} note={note} setNotes={setNotes} />
      ))}
    </div>
  );
}

export default NotesPage;
