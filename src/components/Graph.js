import { render } from "react-dom";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "../styles/Graph.scss";

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

const Graph = (props) => {
  console.log("graph component", props.countries);

  return (
    <div className="graph">
      hola mundo
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

render(<Graph />, document.getElementById("root"));

export default Graph;
