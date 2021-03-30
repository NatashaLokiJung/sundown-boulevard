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
  return (
    <section className="contentBox">
      <h2>Your Receipt</h2>
      {notes.map((note) => (
        <div key={note.id}>{note.text}</div>
      ))}
    </section>
  );
};

export default YourReceipt;
