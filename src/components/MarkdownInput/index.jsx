/* eslint-disable react/prop-types */
import React from 'react';

const MarkdownInput = ({
  onChange, handleSave, handleTitle, value, title,
}) => (
  <div className="input">
    <input className="title" value={title} type="text" onChange={handleTitle} />
    <textarea className="text" type="text-area" value={value} onChange={onChange} />
    <button type="button" onClick={handleSave}>Sauvegarder</button>
  </div>
);

export default MarkdownInput;
