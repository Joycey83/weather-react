import "./App.css";
import backgroundImage from "./components/images/weatherbg.png";
import SearchEngine from "./components/SearchEngine";

function App() {
  return (
    <div>
      <div
        className="background"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <SearchEngine />
      </div>
    </div>
  );
}

export default App;
