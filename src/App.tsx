import * as d3 from "d3";
import "./App.css";
import Circles from "./Circles";
import data from "./data.json";

const width = 960;
const height = 500;

function App() {
  const continents = Array.from(new Set(data.map((d) => d.continent)));

  const colorScale = d3
    .scaleOrdinal()
    .domain(continents)
    .range(d3.schemeTableau10) as d3.ScaleOrdinal<string, string, never>;

  return (
    <div className="App">
      <h1 className="header">Gapminder Chart</h1>
      <div className="slider"></div>
      <div className="chart">
        <Circles
          data={data}
          year={1957}
          width={width}
          height={height}
          colorScale={colorScale}
          selectedContinent="Africa"
        />
      </div>
    </div>
  );
}

export default App;
