import React from "react";
import "./SearchEngine.css";

const SearchEngine = () => {
  return (
    <div className="search--engine__search-box-container">
      <form>
        <input
          type="search"
          placeholder="Enter a city name..."
          className="search--engine__search-box"
        />
        <button className="search--engine__btn" type="submit">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </div>
  );
};

export default SearchEngine;
