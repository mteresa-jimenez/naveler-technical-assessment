import { Bar } from "react-chartjs-2";
import Header from "./Header";

const Graph = (props) => {
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
        backgroundColor: "rgb(152, 0, 255)",
        borderColor: "rgba(181, 143, 255, 1)",
        hoverBackgroundColor: "rgba(154, 0, 194, 0.8)",
        borderWidth: 2,
        data: phonePrefix,
      },
    ],
  };

  const options = {
    mantainAspectRatio: false,
    responsive: true,
  };

  return (
    <>
      <Header title="Graph" />
      <Bar data={data} options={options} />
    </>
  );
};

export default Graph;
