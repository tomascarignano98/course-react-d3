import * as d3 from "d3";
import { useEffect, useRef, useState } from "react";
import { getData } from "./utils";

type CirclesProps = { width: number; height: number };

const Circles = ({ width, height }: CirclesProps) => {
  const [data, setData] = useState(getData());
  const svgRef = useRef<SVGElement | null>(null);

  useEffect(() => {
    if (!svgRef.current) return;
    const svg = d3.select(svgRef.current);

    const xScale = d3.scaleLinear().domain([0, 1]).range([0, width]);
    const yScale = d3.scaleLinear().domain([0, 1]).range([0, height]);

    svg
      .selectAll("circle")
      .data(data)
      .attr("cx", (d) => xScale(d.x))
      .attr("cy", (d) => yScale(d.y))
      .attr("r", 5)
      .attr("fill", "black");
  }, [data, width, height]);

  return (
    <>
      <svg
        ref={svgRef as React.Ref<SVGSVGElement>}
        viewBox={`0 0 ${width} ${height}`}
      >
        {data.map((d, i) => (
          <circle key={i} fill="white" /> // If I set the key to something unique, the animation won't be so nice, since react will treat them as different components.
        ))}
      </svg>

      <button
        style={{ margin: "20px auto 0", display: "block" }}
        onClick={() => setData(getData())}
      >
        Refresh Data
      </button>
    </>
  );
};

export default Circles;
