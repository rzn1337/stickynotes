import React, { useRef, useEffect, useState } from "react";
import Trash from "../icons/Trash";

function NoteCard({ note }) {
  const body = JSON.parse(note.body);
  const default_position = JSON.parse(note.position);
  const colors = JSON.parse(note.colors);

  const [position, setPosition] = useState(default_position)

  const textAreaRef = useRef(null);

  const autoGrow = (textAreaRef) => {
    const { current } = textAreaRef;
    current.style.height = "auto";
    current.style.height = current.scrollHeight + "px";
  };

  useEffect(() => {
    autoGrow(textAreaRef);
  }, []);

  return (
    <div
      className="card"
      style={{
        backgroundColor: colors.colorBody,
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <div
        className="card-header"
        style={{ backgroundColor: colors.colorHeader }}
      >
        <Trash />
      </div>
      <div className="card-body">
        <textarea
          ref={textAreaRef}
          style={{ color: colors.colorText }}
          defaultValue={body}
          onInput={() => {
            autoGrow(textAreaRef);
          }}
        ></textarea>
      </div>
    </div>
  );
}

export default NoteCard;
