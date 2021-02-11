import React from "react";
// import { useEffect } from "react";
import api from "../services/api";
import "../styles/App.css";

api.getDataFromApi();

const App = (props) => {
  // // api
  // useEffect(() => {
  //   api.getDataFromApi().then((data) => {
  //     console.log(data);
  //   });
  // }, []);

  return <div className="App">Hola mundo</div>;
};
export default App;
