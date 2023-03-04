import React, { useState } from "react";
import "./SearchEngine.css";
import axios from "axios";
import WeatherInformation from "./WeatherInformation";

const SearchEngine = () => {
  const [cityInput, setCityInput] = useState("");
  const [cityName, setCityname] = useState(null);
  const [cityNameMessage, setCityNameMessage] = useState("");
  const [temperature, setTemperature] = useState(null);
  const [description, setDescription] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);
  const [icon, setIcon] = useState(null);
  const [loaded, setLoaded] = useState(false);

  const showWeatherDisplay = (response) => {
    setLoaded(true);
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(response.data.weather[0].icon);
    setCityname(response.data.name);
  };

  const cityInputHandler = (event) => {
    setCityInput(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=597c40c39084687093b091cd48b366f8&units=metric`;
    axios.get(url).then(showWeatherDisplay);
    setCityNameMessage(`${cityInput}`);
    setCityInput("");
  };

  return (
    <div className="search--engine__search-box-container">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          value={cityInput}
          placeholder="Enter a city name..."
          className="search--engine__search-box"
          onChange={cityInputHandler}
        />
        <button className="search--engine__btn" type="submit">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
      <h2>{cityNameMessage}</h2>
      <WeatherInformation
        displayLoading={loaded}
        cityName={cityName}
        cityTemp={temperature}
        weatherDescription={description}
        weatherHumidity={humidity}
        wind={wind}
        weatherIcon={icon}
      />
    </div>
  );
};

export default SearchEngine;
