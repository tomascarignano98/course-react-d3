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
    .attr("opacity", (d) => (d.continent === selectedContinent ? 1 : 0.3))
    .attr("fill", (d) =>
      colorPoint(selectedContinent, d.continent)
        ? colorScale(d.continent)
        : "grey"
    );

  // axes
  SVG.selectAll("g").remove();

  SVG.append("g")
    .call(d3.axisBottom(xScale))
    .attr("transform", `translate(0, ${height - margin.bottom})`)
    .call((g) => g.select(".domain").remove());

  SVG.append("g")
    .call(d3.axisLeft(yScale).ticks(5))
    .attr("transform", `translate(${margin.left}, 0)`)
    .call((g) => g.select(".domain").remove());

  // average lines
  SVG.select(".gdp-avg")
    .transition()
    .duration(500)
    .attr("x1", d3.mean(chartData, (d) => xScale(d.gdp_cap)) as number)
    .attr("x2", d3.mean(chartData, (d) => xScale(d.gdp_cap)) as number)
    .attr("y1", margin.top)
    .attr("y2", height - margin.bottom);

  SVG.select(".life-avg")
    .transition()
    .duration(500)
    .attr("x1", margin.left)
    .attr("x2", width - margin.right)
    .attr("y1", d3.mean(chartData, (d) => yScale(d.life_exp)) as number)
    .attr("y2", d3.mean(chartData, (d) => yScale(d.life_exp)) as number);
};

const colorPoint = (selectedContinent: string, continent: string) => {
  return selectedContinent === continent;
};
