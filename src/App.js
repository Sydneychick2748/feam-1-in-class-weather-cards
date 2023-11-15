import "./App.css";
import WeatherCard from "./components/WeatherCards";
import weather1 from "../src/assets/weather-1.png";
import weather2 from "../src/assets/weather-2.png";
import weather3 from "../src/assets/weather-3.png";
import weather4 from "../src/assets/weather-4.png";

function App() {
  return (
    <>
      <h1>Trending Today</h1>
      <div className="parentDiv">
        <WeatherCard
          name="USA Nation Forest"
          heading="Looking Ahead to Your Halloween Forecast "
          image={weather1}
        />
        <WeatherCard
          name="Wild Animals"
          heading="'Lucky to be alive':Whale Takes Out Windsurfer "
          image={weather2}
        />
        <WeatherCard
          name="Sponsered Content by Ford"
          heading="5 Ways Driving At Night Could Be A Little Easier "
          image={weather3}
        />
        <WeatherCard
          name="Weather News"
          heading="Even Our Meteorologists Were Stumped At First "
          image={weather4}
        />
      </div>
      <div className="btn">
        <button>More News</button>
      </div>
    </>
  );
}

export default App;
