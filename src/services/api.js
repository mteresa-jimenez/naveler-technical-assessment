import axios from "axios";
import { endpointCountries, endpointLogin } from "./petitions";

const instance = axios.create({
  baseURL: "http://dev.naveler.com:8007/api/",
});

export const getCountriesFromApi = () => {
  return instance
    .get(endpointCountries)
    .then((response) => response)
    .then((data) => {
      return data.data.message;
    });
};

export const getUsersFromApi = (username, password) => {
  const formData = new FormData();
  formData.append("username", username);
  formData.append("password", password);

  return instance
    .post(endpointLogin, formData)
    .then((response) => response)
    .then((data) => {
      return data.data.message.user_data;
    });
};
