import './SearchBar.module.css';

const SearchBar = ( {searchBarText, onChangeText, onSubmitForm} ) => {

  const handleChange = (e) => {
    onChangeText(e.target.value);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    onSubmitForm();
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <input type="text" id="search" value={searchBarText} onChange={handleChange}></input>
      <button type="submit">Search</button>
    </form>
  );
};




export default SearchBar;