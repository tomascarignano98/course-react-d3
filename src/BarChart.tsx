type BarChartProps = {
  width: number;
  height: number;
  data: { city: string; sunshine: number }[];
};

const BarChart = ({ width, height, data }: BarChartProps) => {
  console.log(data);

  return <svg viewBox={`0 0 ${width} ${height}`}></svg>;
};

export default BarChart;
