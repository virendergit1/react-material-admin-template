import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const visits = [
  {
    id: "react-flux-building-applications",
    title: "Building Applications in React and Flux",
    watchHref: "http://www.pluralsight.com/visits/react-flux-building-applications",
    authorId: "cory-house",
    length: "5:08",
    category: "JavaScript"
  },
  {
    id: "clean-code",
    title: "Clean Code: Writing Code for Humans",
    watchHref: "http://www.pluralsight.com/visits/writing-clean-code-humans",
    authorId: "cory-house",
    length: "3:10",
    category: "Software Practices"
  },
  {
    id: "architecture",
    title: "Architecting Applications for the Real World",
    watchHref: "http://www.pluralsight.com/visits/architecting-applications-dotnet",
    authorId: "cory-house",
    length: "2:52",
    category: "Software Architecture"
  },
  {
    id: "career-reboot-for-developer-mind",
    title: "Becoming an Outlier: Reprogramming the Developer Mind",
    watchHref: "http://www.pluralsight.com/visits/career-reboot-for-developer-mind",
    authorId: "cory-house",
    length: "2:30",
    category: "Career"
  },
  {
    id: "web-components-shadow-dom",
    title: "Web Component Fundamentals",
    watchHref: "http://www.pluralsight.com/visits/web-components-shadow-dom",
    authorId: "cory-house",
    length: "5:10",
    category: "HTML5"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (visit) => {
  return replaceAll(visit.title, ' ', '-');
};

class VisitApi {
  static getAllVisits() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], visits));
      }, delay);
    });
  }

  static saveVisit(visit) {
    visit = Object.assign({}, visit); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minVisitTitleLength = 1;
        if (visit.title.length < minVisitTitleLength) {
          reject(`Title must be at least ${minVisitTitleLength} characters.`);
        }

        if (visit.id) {
          const existingVisitIndex = visits.findIndex(a => a.id == visit.id);
          visits.splice(existingVisitIndex, 1, visit);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new visits in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          visit.id = generateId(visit);
          visit.watchHref = `http://www.pluralsight.com/visits/${visit.id}`;
          visits.push(visit);
        }

        resolve(visit);
      }, delay);
    });
  }

  static deleteVisit(visitId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfVisitToDelete = visits.findIndex(visit => {
          visit.id == visitId;
        });
        visits.splice(indexOfVisitToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default VisitApi;
