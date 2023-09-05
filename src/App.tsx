import { useState } from "react";
import "./App.css";
import BarChart from "./BarChart";
import sunshine from "./sunshine.json";

function App() {
  const [month] = useState(selectOptions[0]);

  const data = sunshine
    .map((d) => ({ city: d.CITY, sunshine: d[month.value] as number }))
    .sort((a, b) => b.sunshine - a.sunshine)
    .slice(0, 20);

  return (
    <div className="App">
      <div className="header"></div>
      <div className="container">
        <BarChart width={900} height={600} data={data} />
      </div>
    </div>
  );
}

export default App;

type Option = {
  value: Exclude<keyof (typeof sunshine)[number], "CITY">;
  label: string;
};

const selectOptions: Option[] = [
  { value: "MAY", label: "May" },
  { value: "JUN", label: "June" },
  { value: "JUL", label: "July" },
  { value: "AUG", label: "August" },
  { value: "SEP", label: "September" },
];
