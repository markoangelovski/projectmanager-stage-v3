const {
  "pmspa-api": { api, apiVersion }
} = require(`../../../config/${process.env.REACT_APP_API_CONFIG}.json`);

const checkAuthCall = () => {
  let status;
  return new Promise((resolve, reject) => {
    fetch(`${api}/${apiVersion}/auth`, {
      method: "POST",
      // Credentials: include for sending the cookie from the browser to the backend
      credentials: "include"
    })
      .then(res => {
        status = res.status;
        return res.json();
      })
      .then(msg => resolve({ status, ...msg }))
      .catch(error => reject(error));
  });
};

const logInCall = payload => {
  return new Promise((resolve, reject) => {
    fetch(`${api}/${apiVersion}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      // Credentials: include for setting the cookie in browser
      credentials: "include",
      body: JSON.stringify(payload)
    })
      .then(res => {
        document.cookie = "booking=" + res.headers.get("X-Auth");
        return res.json();
      })
      .then(token => resolve(token))
      .catch(error => reject(error));
  });
};

const logOutCall = () => {
  return new Promise((resolve, reject) => {
    fetch(`${api}/${apiVersion}/auth/logout`, {
      method: "GET",
      // Credentials: include for setting the cookie in browser
      credentials: "include"
    })
      .then(res => res.json())
      .then(token => resolve(token))
      .catch(error => reject(error));
  });
};

export { checkAuthCall, logInCall, logOutCall };
