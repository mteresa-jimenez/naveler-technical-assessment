import React from "react";
import { getCountriesFromApi, getUsersFromApi } from "../services/api";
import { useState, useEffect } from "react";
import Flags from "./LatinoFlags";
import UserData from "./UserData";
import "../styles/App.scss";

const App = (props) => {
  // state
  const [countries, setCountries] = useState([]);
  const [userData, setUserData] = useState({});

  // api
  useEffect(() => {
    getUsersFromApi("demo_front", "front_front12345").then((data) => {
      console.log(data);
      setUserData(data);
    });

    getCountriesFromApi().then((data) => {
      console.log(data);
      setCountries(data);
    });
  }, []);

  return (
    <div>
      <Flags countries={countries} />
      <UserData countries={countries} userData={userData} />
    </div>
  );
};

export default App;
