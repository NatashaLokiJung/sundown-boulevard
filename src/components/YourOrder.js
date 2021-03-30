/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState, useEffect } from "react";
import Select from 'react-select'
import Calender from "./Calender";

const YourOrder = () => {
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

  const addGuests = () => {
    localStorage.setItem("guests", "json");
  };

  useEffect(() => {
    const json = JSON.stringify(notes);
    localStorage.setItem("guests", json);
  }, [notes]);

  const options = [
    { value: '1', label: '1 Guest' },
    { value: '2', label: '2 Guests' },
    { value: '3', label: '3 Guests' },
    { value: '4', label: '4 Guests' },
    { value: '5', label: '5 Guests' },
    { value: '6', label: '6 Guests' }
  ]

  // EMOTION
  const mediaWrapper = css`
  @media (max-width: 940px) {
    flex-direction: column;
    justify-content: center;
    margin: 10px 0 0 0;
    width: 100%;
  }`;

  return (
    <section className="contentBoxLarge" css={mediaWrapper}>
      <div className="contentBoxSmall" css={mediaWrapper}>
      <h2>Pick date and time</h2>
      <Calender />
      </div>
      <div className="contentBoxSmall" css={mediaWrapper}>
      <h2>Select amount of people</h2>
      <Select options={options} onChange={addGuests} css={mediaWrapper} className="styledSelect"/>
      <form action="/receipt">
        <h3>Enter email:</h3>
        <input onSubmit={addNote} css={mediaWrapper} className="styledInput" type="email"  placeholder="Your email..."/>
        <div>
        <button css={mediaWrapper} className="btn">Order</button>
        </div>
      </form>
     
      </div>
    </section>
  );
};

export default YourOrder;
