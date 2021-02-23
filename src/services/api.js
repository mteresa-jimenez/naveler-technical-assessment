import axios from "axios";

const instance = axios.create({
  baseURL: "http://dev.naveler.com:8007/api/",
});

export const getCountriesFromApi = () => {
  return instance
    .get("get_countries/")
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
    .post("login/", formData)
    .then((response) => response)
    .then((data) => {
      return data.data.message.user_data;
    });
};

