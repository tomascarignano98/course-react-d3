import { useEffect, useRef } from "react";
import { DataPoint } from "./DataPoint.type";
import { MarginType } from "./Margin.type";
import "./index.css";
import { drawChart } from "./drawChart";
import * as d3 from "d3";

// https://observablehq.com/@uwdata/introduction-to-d3-part-2

const margin: MarginType = { left: 50, right: 20, top: 30, bottom: 50 };

type CirclesProps = {
  data: DataPoint[];
  width: number;
  height: number;
  year: number;
  colorScale: d3.ScaleOrdinal<string, string, never>;
  selectedContinent: string;
};

function Circles({
  data,
  width,
  height,
  year,
  colorScale,
  selectedContinent,
}: CirclesProps) {
  const chartData = data.filter((d) => d.year === year);
  const svgRef = useRef(null);

  useEffect(() => {
    if (!svgRef.current) return;
    const SVG = d3.select(svgRef.current);

    drawChart(
      SVG,
      chartData,
      data,
      height,
      width,
      margin,
      colorScale,
      selectedContinent
    );
  }, [chartData, colorScale, data, height, selectedContinent, width]);

  // this just attaches circles to the DOM - it doesn't actually set their size, color, or position
  return (
    <svg ref={svgRef} viewBox={`0 0 ${width} ${height}`}>
      <line stroke="grey" strokeDasharray={"10 2"} className="gdp-avg" />
      <line stroke="grey" strokeDasharray={"10 2"} className="life-avg" />

      {chartData.map((d) => (
        <circle key={d.country} />
      ))}

      <text
        fill="grey"
        fontSize={48}
        x={width - margin.right - 150}
        y={height - margin.bottom - 50}
      >
        {year}
      </text>

      <text fill="grey" x={20} y={height - 10}>
        GDP per Capita
      </text>
      <text
        fill="grey"
        transform={`translate(20, ${margin.top + 100}) rotate(-90)`}
      >
        Life Expectancy
      </text>
    </svg>
  );
}

export default Circles;
