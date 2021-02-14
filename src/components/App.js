import React from "react";
import { getCountriesFromApi, getUsersFromApi } from "../services/api";
import { useState, useEffect } from "react";
import Landing from "./Landing";
import Flags from "./LatinoFlags";
import UserData from "./UserData";
import Graph from "./Graph";
import "../styles/App.scss";
import { Switch, Route } from "react-router-dom";

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
    <>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>

        <Route exact path="/latino-flags">
          <Flags countries={countries} />
        </Route>
        <Route exact path="/user-country-data">
          <UserData
            countries={countries}
            // userData={userData}
            userCountry={userCountry}
          />
        </Route>
        <Route exact path="/graph">
          <Graph countries={countries} />
        </Route>
      </Switch>
    </>
  );
};

export default App;
