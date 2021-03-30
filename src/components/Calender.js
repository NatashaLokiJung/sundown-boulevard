import React, { useState } from "react";
import getDay from "date-fns/getDay";
import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import "react-datepicker/dist/react-datepicker.css";

const Calender = () => {
  const [startDate, setStartDate] = useState(null);
  const [notes, setNotes] = useState([]);
  console.log(localStorage.getItem("message"));
  const isWeekday = (date) => {
    const day = getDay(date);
    return day !== 0 && day !== 6;
  };

  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() < selectedDate.getTime();
  };

  const addNote = (e) => {
    e.preventDefault();
    const newNote = {
      id: Math.random().toString(36).substr(2, 9),
      text: e.target.note.value,
    };
    setNotes([...notes, newNote]);
    e.target.note.value = "";
  };

  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        filterDate={isWeekday}
        // onKeyDown={addNote}
        placeholderText="Select a day and time..."
        showTimeSelect
        filterTime={filterPassedTime}
        excludeTimes={[
          setHours(setMinutes(new Date(), 0), 0),
          setHours(setMinutes(new Date(), 30), 0),
          setHours(setMinutes(new Date(), 0), 1),
          setHours(setMinutes(new Date(), 30), 1),
          setHours(setMinutes(new Date(), 0), 2),
          setHours(setMinutes(new Date(), 30), 2),
          setHours(setMinutes(new Date(), 0), 3),
          setHours(setMinutes(new Date(), 30), 3),
          setHours(setMinutes(new Date(), 0), 4),
          setHours(setMinutes(new Date(), 30), 4),
          setHours(setMinutes(new Date(), 0), 5),
          setHours(setMinutes(new Date(), 30), 5),
          setHours(setMinutes(new Date(), 0), 6),
          setHours(setMinutes(new Date(), 30), 6),
          setHours(setMinutes(new Date(), 0), 7),
          setHours(setMinutes(new Date(), 30), 7),
          setHours(setMinutes(new Date(), 0), 8),
          setHours(setMinutes(new Date(), 30), 8),
          setHours(setMinutes(new Date(), 0), 9),
          setHours(setMinutes(new Date(), 30), 9),
          setHours(setMinutes(new Date(), 0), 10),
          setHours(setMinutes(new Date(), 30), 10),
          setHours(setMinutes(new Date(), 0), 11),
          setHours(setMinutes(new Date(), 30), 11),
          setHours(setMinutes(new Date(), 0), 12),
          setHours(setMinutes(new Date(), 30), 12),
          setHours(setMinutes(new Date(), 0), 13),
          setHours(setMinutes(new Date(), 30), 13),
          setHours(setMinutes(new Date(), 0), 14),
          setHours(setMinutes(new Date(), 30), 14),
          setHours(setMinutes(new Date(), 0), 15),
          setHours(setMinutes(new Date(), 30), 15),
          setHours(setMinutes(new Date(), 30), 23),
        ]}
        dateFormat="MMMM d, yyyy h:mm aa"
      />
      {notes?.map((note) => (
        <div key={note.id}>{note.text}</div>
      ))}
      noget
    </>
  );
};

export default Calender;
