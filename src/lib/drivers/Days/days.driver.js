const {
  "pmspa-api": { api, apiVersion, api_booking_machine }
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

const bookEventCall = (eventId, day, amount) => {
  return new Promise((resolve, reject) => {
    let status;
    fetch(
      `${api_booking_machine}/book?eventId=${eventId}&day=${day}&amount=${amount}`,
      {
        method: "POST",
        headers: {
          Authorization: document.cookie
            .split("; ")
            .find(cookie => cookie.includes("Bearer"))
            .split("=")[1]
        }
      }
    )
      .then(res => {
        status = res.status;
        return res.json();
      })
      .then(stats => resolve({ status, ...stats }))
      .catch(error => reject(error));
  });
};

const deleteBookingCall = bookingId => {
  return new Promise((resolve, reject) => {
    let status;
    fetch(`${api_booking_machine}/delete?bookingId=${bookingId}`, {
      method: "DELETE",
      headers: {
        Authorization: document.cookie
          .split("; ")
          .find(cookie => cookie.includes("Bearer"))
          .split("=")[1]
      }
    })
      .then(res => {
        status = res.status;
        return res.json();
      })
      .then(stats => resolve({ status, ...stats }))
      .catch(error => reject(error));
  });
};

export { getEventsCall, editEventCall, bookEventCall, deleteBookingCall };
