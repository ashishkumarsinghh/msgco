const axios = require("axios").default;

const apiurl = "https://corona.lmao.ninja/all";

const getCovidData = async () => {
  const res = await axios.get(apiurl);
  return res.data;
};

const main = async () => {
  const data = await getCovidData();
  console.log(
    `Today ${data.todayDeaths} people died of Corona. Total deaths reach ${data.deaths}. #StayHomeSaveLives.`
  );
};

main();
