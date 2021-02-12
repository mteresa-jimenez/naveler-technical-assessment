const getDataFromApi = () => {
  return fetch("http://dev.naveler.com:8007/api/get_countries/")
    .then((response) => response.json())
    .then((data) => {
      return data.message;
    });
};
export default {
  getDataFromApi: getDataFromApi,
};
