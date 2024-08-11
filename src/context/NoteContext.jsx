import { createContext, useEffect, useState } from "react";
import { Spinner } from "../icons";
import { service as appwriteService } from "../appwrite/config";

export const NoteContext = createContext();

const NoteProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  const [selectedNote, setSelectedNote] = useState(null)

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    const response = await appwriteService.getNotes();
    setNotes(response.documents);
    setLoading(false);
  };

  const contextData = { notes, setNotes, selectedNote, setSelectedNote };

  return (
    <NoteContext.Provider value={contextData}>
      {loading ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <Spinner size="100" />
        </div>
      ) : (
        children
      )}
    </NoteContext.Provider>
  );
};

export default NoteProvider;
