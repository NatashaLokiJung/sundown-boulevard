import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import Calender from "./Calender";

const YourOrder = () => {
  localStorage.setItem("message", "saved in browser storage");
  // sets the value of "message" to be "saved in browser storage"

  console.log(localStorage.getItem("message"));
  const [notes, setNotes] = useState([]);

  const addNote = (e) => {
    e.preventDefault();
    const newNote = {
      id: Math.random().toString(36).substr(2, 9),
      text: e.target.note.value,
    };
    setNotes([...notes, newNote]);
    e.target.note.value = "";
  };

  useEffect(() => {
    const json = JSON.stringify(notes);
    localStorage.setItem("notes", json);
  }, [notes]);

  return (
    <section className="contentBox">
      <h2>Your Order</h2>
      <Calender />
      <form onSubmit={addNote}>
        <h3>Enter email:</h3>
        <input type="email" name="note" />
        <Link to="/receipt">
          <button className="btn">Order</button>
        </Link>
      </form>
      {notes.map((note) => (
        <div key={note.id}>{note.text}</div>
      ))}
    </section>
  );
};

export default YourOrder;
