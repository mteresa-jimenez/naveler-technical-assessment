// import { render } from "react-dom";
import { Bar } from "react-chartjs-2";
import Header from "./Header";
// import Highcharts from "highcharts";
// import HighchartsReact from "highcharts-react-official";
import "../styles/Graph.scss";

const Graph = (props) => {
  console.log("countries in graph", props.countries);
  const names = props.countries.map((country) => {
    return country.name;
  });

  const phonePrefix = props.countries.map((country) => {
    return parseInt(country.phone_prefix);
  });

  const data = {
    labels: names,
    datasets: [
      {
        label: "Phone prefix",
        backgroundColor: "rgb(0, 129, 255)",
        boderColor: "white",
        boderWidth: 1,
        data: phonePrefix,
      },
    ],
  };

  const options = {
    mantainAspectRatio: false,
    responsive: true,
  };

  return (
    <div>
      <Header title="Graph" />
      <Bar data={data} options={options} className="graph" />
      {/* <HighchartsReact highcharts={Highcharts} options={options} /> */}
    </div>
  );
};

// render(<Graph />, document.getElementById("root"));

export default Graph;
