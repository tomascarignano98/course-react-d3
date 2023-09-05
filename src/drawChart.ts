import * as d3 from "d3";
import { DataPoint } from "./DataPoint.type";
import { MarginType } from "./Margin.type";

export const drawChart = (
  SVG: d3.Selection<d3.BaseType, unknown, HTMLElement, unknown>,
  chartData: DataPoint[],
  data: DataPoint[],
  height: number,
  width: number,
  margin: MarginType,
  colorScale: d3.ScaleOrdinal<string, string, never>,
  selectedContinent: string
) => {
  const MAX_RADIUS = 40;

  const xScale = d3
    .scaleLog()
    .domain(d3.extent(data, (d) => d.gdp_cap) as [number, number])
    .range([margin.left, width - margin.right]);

  const yScale = d3
    .scaleLinear()
    .domain(d3.extent(data, (d) => d.life_exp) as [number, number])
    .range([height - margin.bottom, margin.top]);

  const rScale = d3
    .scaleSqrt()
    .domain(d3.extent(data, (d) => d.population) as [number, number])
    .range([1, MAX_RADIUS]);

  // circles
  SVG.selectAll("circle")
    .data(chartData)
    .transition()
    .duration(500)
    .attr("cx", (d) => xScale(d.gdp_cap))
    .attr("cy", (d) => yScale(d.life_exp))
    .attr("r", (d) => rScale(d.population))
    .attr("opacity", 1)
    .attr("fill", (d) => colorScale(d.continent));
};
