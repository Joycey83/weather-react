import { ColorRing } from "react-loader-spinner";
// import "./WeatherInformation.css";
const WeatherInformation = (props) => {
  let weatherContent = (
    <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      colors={["#5F9EA0", "#0047AB", "#6495ED", "#00FFFF", "#088F8F"]}
    />
  );

  if (props.displayLoading) {
    weatherContent = (
      <ul className="weather-display">
        <li>
          {" "}
          The Temperature in {props.cityName} is {Math.round(props.cityTemp)}°C.
        </li>
        <li>
          {" "}
          The Weather condition right now in {props.cityName} is{" "}
          {props.weatherDescription}.
        </li>
        <li>
          {" "}
          The Humidity in {props.cityName} is {props.weatherHumidity}%.
        </li>
        <li>
          {" "}
          The Wind in {props.cityName} is {props.wind}km/h.
        </li>
        <li>
          <img
            src={`http://openweathermap.org/img/wn/${props.weatherIcon}@2x.png`}
            alt={props.description}
          />
        </li>
      </ul>
    );
  }

  return <div>{weatherContent}</div>;
};

export default WeatherInformation;
