import "./Legend.css";

type LegendProps = {
  labels: string[];
  colorScale: d3.ScaleOrdinal<string, string, never>;
  setContinent: (v: string) => void;
  continent: string;
};

const Legend = ({
  labels,
  colorScale,
  continent,
  setContinent,
}: LegendProps) => {
  return (
    <div className="legend-container">
      {labels.map((l) => (
        <div
          key={l}
          className="legend-row"
          style={{ fontWeight: continent === l ? "bold" : "normal" }}
          onClick={() => setContinent(l)}
        >
          <div
            style={{ backgroundColor: colorScale(l) }}
            className="legend-marker"
          />

          <p className="legend-label">{l}</p>
        </div>
      ))}
    </div>
  );
};

export default Legend;
