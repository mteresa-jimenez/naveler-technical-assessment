import { render } from "react-dom";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "../styles/Graph.scss";

const Graph = (props) => {
  console.log("graph component", props.countries);

  const options = {
    title: {
      text: "My chart",
    },
    series: [
      {
        data: [1, 2, 3],
      },
    ],
  };

  return (
    <div className="graph">
      <h1>chart</h1>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

render(<Graph />, document.getElementById("root"));

export default Graph;
