import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
    const dataPointValues = props.chartDataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues); // <-- Using the spread operator changes the variable from an array of numbers to a list of individual numbers that the Math.max function can accept.
  return (
    <div className="chart">
      {props.chartDataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
