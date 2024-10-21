import { useState } from 'react';
import './SearchBar.module.css';

const SearchBar = ( {onSubmitForm} ) => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    onSubmitForm(text);
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <input type="text" id="search" value={text} onChange={handleChange}></input>
      <button type="submit">Search</button>
    </form>
  );
};




export default SearchBar;