import React from "react";
import "./SearchEngine.css";
import LocationButton from "./LocationButton";
import SearchButton from "./SearchButton";

const SearchEngine = () => {
  return (
    <div className="search-box-container">
      <form>
        <input
          type="search"
          placeholder="Enter a city name..."
          className="search-box"
        />
        <SearchButton />
        <LocationButton />
      </form>
    </div>
  );
};

export default SearchEngine;
