/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";

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
    <>
    <div css={mediaWrapper}>
      <Link to="/">
      <button className="btn" css={mediaWrapper}>Back to home</button>
      </Link>
      </div>
    <section className="contentBoxLarge" css={mediaWrapper}>
      <h2>Your Receipt</h2>
      {notes.map((note) => (
        <div key={note.id}>{note.text}</div>
      ))}
    </section>
    </>
  );
};

export default YourReceipt;
