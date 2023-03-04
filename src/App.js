import "./App.css";
import backgroundImage from "./components/images/weatherbg.png";
import SearchEngine from "./components/SearchEngine";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <div
        className="background"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <SearchEngine />
        <Footer />
      </div>
    </div>
  );
}

export default App;
