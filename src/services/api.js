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
      console.log(data);
      return data.data.message.user_data;
    });
};

// export const getCountriesFromApi = () => {
//   return fetch("http://dev.naveler.com:8007/api/get_countries/", {
//     mode: "cors",
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       return data.message;
//     });
// };

// export const getUsersFromApi = (username, password) => {
//   const formData = new FormData();
//   formData.append("username", username);
//   formData.append("password", password);

//   return fetch("http://dev.naveler.com:8007/api/login/", {
//     method: "POST",
//     body: formData,
//   })
//     .then((results) => results.json())
//     .then((data) => {
//       return data.message.user_data;
//     });
// };
