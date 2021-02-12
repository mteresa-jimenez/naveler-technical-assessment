export const getCountriesFromApi = () => {
  return fetch("http://dev.naveler.com:8007/api/get_countries/", {
    mode: "cors",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data.message;
    });
};

export const getUsersFromApi = (username, password) => {
  const formData = new FormData();
  formData.append("username", username);
  formData.append("password", password);

  return fetch("http://dev.naveler.com:8007/api/login/", {
    method: "POST",
    body: formData,
    // headers: {
    //   Authorization: "Basic " + btoa(username + ":" + password),
    // },

    // headers: {
    //   "Content-type": "application/json",
    // },
    // body: JSON.stringify({
    //   username: "demo_front",
    //   password: "front_front12345",
    // }),
  })
    .then((results) => results.json())
    .then((data) => {
      console.log(data);
    });
};
