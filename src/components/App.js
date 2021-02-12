import React from "react";
import { getCountriesFromApi, getUsersFromApi } from "../services/api";
import { useState, useEffect } from "react";
import Flags from "./Flags";
// import UserInfo from "./UserInfo";
import "../styles/App.css";

const App = (props) => {
  // state
  const [countries, setCountries] = useState([]);

  // api
  useEffect(() => {
    getUsersFromApi("demo_front", "front_front12345");

    getCountriesFromApi().then((data) => {
      console.log(data);
      setCountries(data);
    });
  }, []);

  return (
    <div>
      <Flags countries={countries} />
      {/* <UserInfo /> */}
    </div>
  );
};

export default App;
