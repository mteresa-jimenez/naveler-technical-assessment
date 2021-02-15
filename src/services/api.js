export const getCountriesFromApi = () => {
  return fetch("http://dev.naveler.com:8007/api/get_countries/", {
    mode: "cors",
  })
    .then((response) => response.json())
    .then((data) => {
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
  })
    .then((results) => results.json())
    .then((data) => {
      return data.message.user_data;
    });
};
