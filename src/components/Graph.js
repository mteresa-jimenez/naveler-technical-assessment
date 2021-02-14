import { render } from "react-dom";
// import Highcharts from "highcharts";
// import HighchartsReact from "highcharts-react-official";
import "../styles/Graph.scss";

const Graph = (props) => {
  console.log("countries in graph", props.countries);
  const flags = props.countries.map((country) => {
    return (
      <img
        src={"http://dev.naveler.com:8007/static/" + country.country_flag}
        alt={"flag of " + country.name_en}
        title={"flag of " + country.name_en}
      />
    );
  });

  const phonePrefix = props.countries.map((country) => {
    return parseInt(country.phone_prefix);
  });

  return (
    <div className="graph">
      <h1>chart</h1>

      {/* <HighchartsReact highcharts={Highcharts} options={options} /> */}
    </div>
  );
};

// render(<Graph />, document.getElementById("root"));

export default Graph;
