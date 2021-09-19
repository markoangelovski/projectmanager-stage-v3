const {
  "pmspa-api": { api, apiVersion }
} = require(`../../../config/${process.env.REACT_APP_API_CONFIG}.json`);

const postNoteCall = payload => {
  return new Promise((resolve, reject) => {
    fetch(`${api}/${apiVersion}/notes`, {
      method: "POST",
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

const deleteNoteCall = noteId => {
  return new Promise((resolve, reject) => {
    fetch(`${api}/${apiVersion}/notes/${noteId}`, {
      method: "DELETE",
      // Credentials: include for setting the cookie in browser
      credentials: "include"
    })
      .then(res => res.json())
      .then(stats => resolve(stats))
      .catch(error => reject(error));
  });
};

// const getNotesCall = ({ limit, skip, sort, task }) => {
//   return new Promise((resolve, reject) => {
//     fetch(
//       `${api}/${apiVersion}/notes?limit=${limit}&skip=${skip}&sort=${sort}&task=${task}`,
//       {
//         method: "GET",
//         // Credentials: include for setting the cookie in browser
//         credentials: "include"
//       }
//     )
//       .then(res => res.json())
//       .then(stats => resolve(stats))
//       .catch(error => reject(error));
//   });
// };

// const editEventCall = (eventId, payload) => {
//   return new Promise((resolve, reject) => {
//     fetch(`${api}/${apiVersion}/days/event.update/${eventId}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       // Credentials: include for setting the cookie in browser
//       credentials: "include",
//       body: JSON.stringify(payload)
//     })
//       .then(res => res.json())
//       .then(stats => resolve(stats))
//       .catch(error => reject(error));
//   });
// };

export { postNoteCall, deleteNoteCall };
