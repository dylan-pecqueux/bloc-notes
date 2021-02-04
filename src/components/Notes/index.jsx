/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import Showdown from 'showdown';

const Notes = ({ handleShow, createNote }) => {
  const converter = new Showdown.Converter();
  const arr = [];
  for (let i = 0; i < localStorage.length; i += 1) {
    const getItem = localStorage.getItem(localStorage.key(i));
    arr.push(converter.makeHtml(localStorage.key(i)) + converter.makeHtml(getItem));
  }

  const createMarkup = (item) => ({ __html: item });
  return (
    <div className="left">
      <button type="button" onClick={createNote}>Nouvelle note</button>
      <ul className="list">
        {arr.map((item, index) => (
          <li key={index} onClick={() => handleShow(index)}>
            <div dangerouslySetInnerHTML={createMarkup(item)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;
