import "./index.css";

// https://observablehq.com/@uwdata/introduction-to-d3-part-2

const margin = { left: 50, right: 20, top: 30, bottom: 50 };

type CirclesProps = { width: number; height: number; year: number };

function Circles({
  width,
  height,
  year,
  colorScale,
  selectedContinent,
}: CirclesProps) {
  // this just attaches circles to the DOM - it doesn't actually set their size, color, or position
  return <svg viewBox={`0 0 ${width} ${height}`}></svg>;
}

export default Circles;
