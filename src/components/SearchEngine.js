import React from "react";
import "./SearchEngine.css";

const SearchEngine = () => {
  return (
    <div className="search-box-container">
      <form>
        <input
          type="search"
          placeholder="Enter a city name..."
          className="search-box"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchEngine;
