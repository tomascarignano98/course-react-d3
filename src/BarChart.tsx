import * as d3 from "d3";

type BarChartProps = {
  width: number;
  height: number;
  data: { city: string; sunshine: number }[];
};

const BarChart = ({ width, height, data }: BarChartProps) => {
  const margin = 10;

  const xScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d.sunshine) ?? 1])
    .range([0, width - margin]);

  const yScale = d3
    .scaleBand()
    .domain(data.map((d) => d.city))
    .range([height - 2 * margin, 0]);

  return <svg viewBox={`0 0 ${width} ${height}`}></svg>;
};

export default BarChart;
