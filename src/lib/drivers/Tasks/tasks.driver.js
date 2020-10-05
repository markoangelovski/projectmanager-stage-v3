const {
  "pmspa-api": { api, apiVersion }
} = require(`../../../config/${process.env.REACT_APP_API_CONFIG}.json`);

const getTasksDocsCall = payload => {
  return new Promise((resolve, reject) => {
    fetch(`${api}/${apiVersion}/stats/tasks?${payload}`, {
      method: "GET",
      // Credentials: include for setting the cookie in browser
      credentials: "include"
    })
      .then(res => res.json())
      .then(stats => resolve(stats))
      .catch(error => reject(error));
  });
};

const editTaskCall = (taskId, payload) => {
  return new Promise((resolve, reject) => {
    fetch(`${api}/${apiVersion}/tasks/${taskId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      // Credentials: include for setting the cookie in browser
      credentials: "include",
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(stats => resolve(stats))
      .catch(error => reject(error));
  });
};

export { getTasksDocsCall, editTaskCall };
