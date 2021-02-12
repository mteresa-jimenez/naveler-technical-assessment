import React from "react";
import api from "../services/api";
import { useState, useEffect } from "react";
import Flags from "./Flags";
import UserInfo from "./UserInfo";
import "../styles/App.css";

const App = (props) => {
  // state
  const [countries, setCountries] = useState([]);

  // api
  useEffect(() => {
    api.getDataFromApi().then((data) => {
      console.log(data);
      setCountries(data);
    });
  }, []);

  return (
    <div>
      <Flags countries={countries} />
      <UserInfo />
    </div>
  );
};

export default App;
