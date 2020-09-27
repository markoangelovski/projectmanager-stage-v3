const {
  "pmspa-api": { api, apiVersion }
} = require(`../../../config/${process.env.REACT_APP_API_CONFIG}.json`);

const getEventsCall = payload => {
  return new Promise((resolve, reject) => {
    fetch(`${api}/${apiVersion}/days/event.find?${payload}`, {
      method: "GET",
      // Credentials: include for setting the cookie in browser
      credentials: "include"
    })
      .then(res => res.json())
      .then(stats => resolve(stats))
      .catch(error => reject(error));
  });
};

const editEventCall = (eventId, payload) => {
  return new Promise((resolve, reject) => {
    fetch(`${api}/${apiVersion}/days/event.update/${eventId}`, {
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

export { getEventsCall, editEventCall };
