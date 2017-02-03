import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const incidents = [
  {
    id: "1",
    title: "A new incident number one",
    watchHref: "http://localhost:3000/communities/1/incidents/1",
    incidentDetail: "Some Incident details goes here for one",
    incidentDate: "01/27/2017",
    incidentTime: "5:08 PM",
    securityGuardNotes: "Some guard notes for one",
    incidentSeverity: "high",
  },
  {
    id: "2",
    title: "A new incident number two",
    watchHref: "http://localhost:3000/communities/1/incidents/2",
    incidentDetail: "Some Incident details goes here for two",
    incidentDate: "01/29/2017",
    incidentTime: "6:25 PM",
    securityGuardNotes: "Some guard notes for two",
    incidentSeverity: "medium",
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (incident) => {
  return replaceAll(incident.title, ' ', '-');
};

class IncidentApi {
  static getAllIncidents() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], incidents));
      }, delay);
    });
  }

  static saveIncident(incident) {
    incident = Object.assign({}, incident); // to avoid manipulating object passed in.

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minIncidentTitleLength = 1;
        if (incident.title.length < minIncidentTitleLength) {
          reject(`Title must be at least ${minIncidentTitleLength} characters.`);
        }
        if (incident.id) {
          const existingIncidentIndex = incidents.findIndex(a => a.id == incident.id);
          incidents.splice(existingIncidentIndex, 1, incident);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new incidents in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          incident.id = generateId(incident);
          incident.watchHref = `http://localhost:3000/communities/1/incidents/${incident.id}`;
          incidents.push(incident);
        }

        resolve(incident);
      }, delay);
    });
  }

  static deleteIncident(incidentId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfIncidentToDelete = incidents.findIndex(incident => {
          incident.id == incidentId;
        });
        incidents.splice(indexOfIncidentToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default IncidentApi;
