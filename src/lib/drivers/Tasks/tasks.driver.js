const {
  "pmspa-api": { api, apiVersion }
} = require(`../../../config/${process.env.REACT_APP_API_CONFIG}.json`);

const getTasksDocsCall = skip => {
  return new Promise((resolve, reject) => {
    fetch(`${api}/${apiVersion}/stats/tasks?skip=${skip}`, {
      method: "GET",
      // Credentials: include for setting the cookie in browser
      credentials: "include"
    })
      .then(res => res.json())
      .then(stats => resolve(stats))
      .catch(error => reject(error));
  });
};

export { getTasksDocsCall };
