// import { render } from "react-dom";
import { Bar } from "react-chartjs-2";
// import Highcharts from "highcharts";
// import HighchartsReact from "highcharts-react-official";
import "../styles/Graph.scss";

const Graph = (props) => {
  console.log("countries in graph", props.countries);
  const flags = props.countries.map((country) => {
    return (
      <img
        src={"http://dev.naveler.com:8007/static/" + country.country_flag}
        alt=""
      />
    );
  });

  console.log("flags", flags);

  const phonePrefix = props.countries.map((country) => {
    return parseInt(country.phone_prefix);
  });

  const data = {
    labels: flags,
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
    <div className="graph">
      <h1>chart</h1>
      <Bar data={data} options={options} />
      {/* <HighchartsReact highcharts={Highcharts} options={options} /> */}
    </div>
  );
};

// render(<Graph />, document.getElementById("root"));

export default Graph;
