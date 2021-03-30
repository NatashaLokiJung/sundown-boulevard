/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState, useEffect } from "react";

const YourReceipt = () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    const json = localStorage.getItem("notes");
    const savedNotes = JSON.parse(json);
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  // EMOTION
  const mediaWrapper = css`
  @media (max-width: 940px) {
    flex-direction: column;
    justify-content: center;
    margin: 10px 0 0 0;
    width: 100%;
  }`;

  return (
    <section className="contentBox" css={mediaWrapper}>
      <h2>Your Receipt</h2>
      {notes.map((note) => (
        <div key={note.id}>{note.text}</div>
      ))}
    </section>
  );
};

export default YourReceipt;
