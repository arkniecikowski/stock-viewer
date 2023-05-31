import { useState } from "react";

import "./search-box.css";

const SearchBox = ({ onInputChange }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => setInputValue(event.target.value);
  const handleButtonClick = () => onInputChange(inputValue);

  return (
    <div className="search-box-container">
      <input
        className="search-box-input"
        type="text"
        id="searchInput"
        name="searchInput"
        onChange={handleInputChange}
        value={inputValue}
      />
      <button className="search-box-button" onClick={handleButtonClick}>Search</button>
    </div>
  );
};

export default SearchBox;
