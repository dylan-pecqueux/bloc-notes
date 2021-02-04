/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
import Showdown from 'showdown';
import React from 'react';

const NoteDisplay = ({ value, title }) => {
  const converter = new Showdown.Converter();
  converter.setOption('simpleLineBreaks', 'true');
  const content = converter.makeHtml(value);
  const titleDisp = converter.makeHtml(title);

  const createMarkup = () => {
    return { __html: content };
  };

  const createTitle = () => {
    return { __html: titleDisp };
  };

  return (
    <div className="content">
      <div className="title-disp" dangerouslySetInnerHTML={createTitle()} />
      <div dangerouslySetInnerHTML={createMarkup()} />
    </div>
  );
};

export default NoteDisplay;
