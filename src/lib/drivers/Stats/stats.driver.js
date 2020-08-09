const {
  "pmspa-api": { api, apiVersion }
} = require(`../../../config/${process.env.REACT_APP_API_CONFIG}.json`);

const getDayStatsCall = payload => {
  return new Promise((resolve, reject) => {
    fetch(`${api}/${apiVersion}/stats/day?${payload}`, {
      method: "GET",
      // Credentials: include for setting the cookie in browser
      credentials: "include"
    })
      .then(res => res.json())
      .then(stats => resolve(stats))
      .catch(error => reject(error));
  });
};

const getTaskStatsCall = payload => {
  return new Promise((resolve, reject) => {
    fetch(`${api}/${apiVersion}/stats/task?${payload}`, {
      method: "GET",
      // Credentials: include for setting the cookie in browser
      credentials: "include"
    })
      .then(res => res.json())
      .then(stats => resolve(stats))
      .catch(error => reject(error));
  });
};

module.exports = { getDayStatsCall, getTaskStatsCall };
