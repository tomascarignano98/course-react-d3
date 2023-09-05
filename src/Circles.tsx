import { useRef } from "react";

type CirclesProps = { width: number; height: number };

const Circles = ({ width, height }: CirclesProps) => {
  const svgRef = useRef(null);

  return (
    <>
      <svg
        ref={svgRef as React.Ref<SVGSVGElement>}
        viewBox={`0 0 ${width} ${height}`}
      ></svg>

      <button style={{ margin: "20px auto 0", display: "block" }}>
        Refresh Data
      </button>
    </>
  );
};

export default Circles;
