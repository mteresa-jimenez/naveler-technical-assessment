import React from "react";
import { getCountriesFromApi, getUsersFromApi } from "../services/api";
import { useState, useEffect } from "react";
import Flags from "./LatinoFlags";
import UserData from "./UserData";
import Graph from "./Graph";
import "../styles/App.scss";

const App = (props) => {
  // state
  const [countries, setCountries] = useState([]);
  // const [userData, setUserData] = useState({});
  const [userCountry, setUserCountry] = useState({});

  // api
  useEffect(() => {
    // getUsersFromApi("demo_front", "front_front12345").then((data) => {
    //   console.log(data);
    //   setUserData(data);
    // });

    getUsersFromApi("demo_front", "front_front12345").then((data) => {
      console.log(data.country);
      setUserCountry(data.country);
    });

    getCountriesFromApi().then((data) => {
      console.log(data);
      setCountries(data);
    });
  }, []);

  return (
    <div>
      <Flags countries={countries} />
      <UserData
        countries={countries}
        // userData={userData}
        userCountry={userCountry}
      />
      <Graph countries={countries} />
    </div>
  );
};

export default App;
