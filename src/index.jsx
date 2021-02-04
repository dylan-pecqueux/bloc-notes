/* eslint-disable max-len */
/* eslint-disable import/no-unresolved */
import React from 'react';
import ReactDOM from 'react-dom';
import MarkdownInput from 'components/MarkdownInput';
import NoteDisplay from 'components/NoteDisplay';
import Notes from 'components/Notes';
import 'style.scss';

const App = () => {
  const [value, setValue] = React.useState('');
  const [title, setTitle] = React.useState();

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const handleShow = (key) => {
    setTitle(localStorage.key(key));
    setValue(localStorage.getItem(localStorage.key(key)));
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleSave = () => {
    localStorage.setItem(title, value);
    handleShow(title);
  };

  const createNote = () => {
    setTitle('');
    setValue('');
  };

  return (
    <div className="bloc-note">
      <Notes handleShow={handleShow} createNote={createNote} />
      <div className="right">
        <NoteDisplay value={value} title={title} />
        <MarkdownInput handleTitle={handleTitle} title={title} value={value} onChange={onChange} handleSave={handleSave} />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
