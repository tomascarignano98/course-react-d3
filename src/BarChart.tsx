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
    .range([0, height - 2 * margin]);

  const rectangles = data.map((d) => (
    <rect
      key={d.city}
      x={margin}
      y={yScale(d.city)}
      width={xScale(d.sunshine)}
      height={yScale.bandwidth()}
      fill="darkorange"
      stroke="white"
    />
  ));

  const labels = data.map((d) => (
    <text
      key={d.city}
      x={xScale(d.sunshine)}
      textAnchor="end"
      y={(yScale(d.city) ?? 0) + 20}
      fill="white"
      fontWeight={500}
    >
      {d.city}
    </text>
  ));

  return (
    <svg viewBox={`0 0 ${width} ${height}`}>
      {rectangles}
      {labels}
    </svg>
  );
};

export default BarChart;
