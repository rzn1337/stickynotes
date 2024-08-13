import React, { useRef, useEffect, useState, useContext } from "react";
import { Spinner } from "../icons";
import DeleteButton from "./DeleteButton";
import { setNewOffset, autoGrow, setZIndex, bodyParser } from "../utils";
import { service as appwriteService } from "../appwrite/config";
import { NoteContext } from "../context/NoteContext";
import SliderButton from "./SliderButton";

function NoteCard({ note }) {
  const body = bodyParser(note.body);
  const default_position = bodyParser(note.position);
  const colors = bodyParser(note.colors);

  const [isUp, setIsUp] = useState(false);

  const keyUpTimer = useRef(null);

  const { setSelectedNote } = useContext(NoteContext);

  const [position, setPosition] = useState(default_position);

  const [saving, setSaving] = useState(false);

  let mouseStartPos = { x: 0, y: 0 };

  const cardRef = useRef(null);

  const textAreaRef = useRef(null);

  useEffect(() => {
    autoGrow(textAreaRef);
    setZIndex(cardRef.current);
  }, []);

  const mouseMove = (e) => {
    const mouseMoveDir = {
      x: mouseStartPos.x - e.clientX,
      y: mouseStartPos.y - e.clientY,
    };

    mouseStartPos.x = e.clientX;
    mouseStartPos.y = e.clientY;

    const newPosition = setNewOffset(cardRef.current, mouseMoveDir);

    setPosition(newPosition);
  };

  const mouseDown = (e) => {
    if (e.target.className === "card-header") {
      setZIndex(cardRef.current);

      setSelectedNote(note);

      mouseStartPos.x = e.clientX;
      mouseStartPos.y = e.clientY;

      document.addEventListener("mousemove", mouseMove);
      document.addEventListener("mouseup", mouseUp);
    }
  };

  const mouseUp = () => {
    document.removeEventListener("mousemove", mouseMove);
    document.removeEventListener("mouseup", mouseUp);

    const newPosition = setNewOffset(cardRef.current);
    saveData("position", newPosition);
  };

  const saveData = (key, value) => {
    const payload = { [key]: JSON.stringify(value) };

    appwriteService.updateNote(note.$id, payload);

    setSaving(false);
  };

  const handleKeyUp = (e) => {
    setSaving(true);

    if (keyUpTimer.current) {
      clearTimeout(keyUpTimer.current);
    }

    keyUpTimer.current = setTimeout(() => {
      saveData("body", textAreaRef.current.value);
    }, 1000);
  };

  return (
    <div
      ref={cardRef}
      className="card"
      style={{
        backgroundColor: colors.colorBody,
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <div
        onMouseDown={mouseDown}
        className="card-header"
        style={{ backgroundColor: colors.colorHeader }}
      >
        <div className="flex space-x-0">
          <DeleteButton noteID={note.$id} />
          <SliderButton isUp={isUp} setIsUp={setIsUp} ref={textAreaRef} />
        </div>
        {saving && (
          <div className="card-saving">
            <Spinner color={colors.colorText} />
            <span style={{ color: colors.colorText }}>Saving...</span>
          </div>
        )}
      </div>
      <div
        className={`card-body transition-all duration-3000 ease-out overflow-hidden
    ${!isUp ? "max-h-[1000px] opacity-100 p-4" : "max-h-0 opacity-0 px-4 py-0"}`}
      >
        <textarea
          className={`w-full resize-none text-base transition-all duration-3000 ease-linear
        ${isUp ? "p-0" : ""}`}
          onKeyUp={handleKeyUp}
          ref={textAreaRef}
          style={{ color: colors.colorText }}
          defaultValue={body}
          onInput={() => {
            autoGrow(textAreaRef);
          }}
          onFocus={() => {
            setZIndex(cardRef.current);
            setSelectedNote(note);
          }}
        ></textarea>
      </div>
    </div>
  );
}

export default NoteCard;
