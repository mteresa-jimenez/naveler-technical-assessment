const getDataFromApi = () => {
  fetch("http://dev.naveler.com:8007/api/get_countries/")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
};
export default {
  getDataFromApi: getDataFromApi,
};
