import React, { useRef, useEffect, useState } from "react";
import Trash from "../icons/Trash";

function NoteCard({ note }) {
  const body = JSON.parse(note.body);
  const default_position = JSON.parse(note.position);
  const colors = JSON.parse(note.colors);

  const [position, setPosition] = useState(default_position);

  let mouseStartPos = { x: 0, y: 0 };

  const cardRef = useRef(null);

  const textAreaRef = useRef(null);

  const autoGrow = (textAreaRef) => {
    const { current } = textAreaRef;
    current.style.height = "auto";
    current.style.height = current.scrollHeight + "px";
  };

  useEffect(() => {
    autoGrow(textAreaRef);
  }, []);

  const mouseMove = (e) => {
    const mouseMoveDir = {
      x: mouseStartPos.x - e.clientX,
      y: mouseStartPos.y - e.clientY,
    };

    mouseStartPos.x = e.clientX;
    mouseStartPos.y = e.clientY;

    setPosition({
      x: cardRef.current.offsetLeft - mouseMoveDir.x,
      y: cardRef.current.offsetTop - mouseMoveDir.y,
    });
  };

  const mouseDown = (e) => {
    mouseStartPos.x = e.clientX;
    mouseStartPos.y = e.clientY;

    document.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseup", mouseUp);
  };

  const mouseUp = () => {
    document.removeEventListener("mousemove", mouseMove);
    document.removeEventListener("mouseup", mouseUp);
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
