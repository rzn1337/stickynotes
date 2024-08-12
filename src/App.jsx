import NotesPage from "./pages/NotesPage";
import NoteProvider from "./context/NoteContext";
import ThemeProvider from "./context/ThemeContext";
import { ThemeContext } from "./context/ThemeContext";
import { useContext, useEffect } from "react";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(theme);
  }, [theme]);

  return (
    <>
      <div
        className="bg-white dark:bg-customDark bg-light-custom-pattern dark:bg-custom-pattern h-screen relative overflow-auto"
      >
        <NoteProvider>
          <NotesPage />
        </NoteProvider>
      </div>
    </>
  );
}

export default App;
