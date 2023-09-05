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
    <svg viewBox={`0 0 ${width} ${height}`}>
      {/* {chartData.map((d) => (

    ))} */}
    </svg>
  );
}

export default Circles;
