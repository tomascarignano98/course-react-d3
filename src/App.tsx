import * as d3 from "d3";
import InputSlider from "react-input-slider";
import "./App.css";
import Circles from "./Circles";
import data from "./data.json";
import { useState } from "react";

const width = 960;
const height = 500;

function App() {
  const [year, setYear] = useState(1957);
  const continents = Array.from(new Set(data.map((d) => d.continent)));

  const colorScale = d3
    .scaleOrdinal()
    .domain(continents)
    .range(d3.schemeTableau10) as d3.ScaleOrdinal<string, string, never>;

  return (
    <div className="App">
      <h1 className="header">Gapminder Chart</h1>
      <div className="slider">
        <p style={{ marginRight: 8 }}>{year}</p>

        <InputSlider
          axis="x"
          xmin={1957}
          xmax={2007}
          x={year}
          xstep={5}
          onChange={(v) => setYear(v.x)}
        />
      </div>

      <div className="chart">
        <Circles
          data={data}
          year={year}
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
