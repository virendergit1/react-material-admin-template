import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const visitors = [
  {
    id: "react-flux-building-applications",
    title: "Building Applications in React and Flux",
    watchHref: "http://www.pluralsight.com/visitors/react-flux-building-applications",
    authorId: "cory-house",
    length: "5:08",
    category: "JavaScript"
  },
  {
    id: "clean-code",
    title: "Clean Code: Writing Code for Humans",
    watchHref: "http://www.pluralsight.com/visitors/writing-clean-code-humans",
    authorId: "cory-house",
    length: "3:10",
    category: "Software Practices"
  },
  {
    id: "architecture",
    title: "Architecting Applications for the Real World",
    watchHref: "http://www.pluralsight.com/visitors/architecting-applications-dotnet",
    authorId: "cory-house",
    length: "2:52",
    category: "Software Architecture"
  },
  {
    id: "career-reboot-for-developer-mind",
    title: "Becoming an Outlier: Reprogramming the Developer Mind",
    watchHref: "http://www.pluralsight.com/visitors/career-reboot-for-developer-mind",
    authorId: "cory-house",
    length: "2:30",
    category: "Career"
  },
  {
    id: "web-components-shadow-dom",
    title: "Web Component Fundamentals",
    watchHref: "http://www.pluralsight.com/visitors/web-components-shadow-dom",
    authorId: "cory-house",
    length: "5:10",
    category: "HTML5"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (visitor) => {
  return replaceAll(visitor.title, ' ', '-');
};

class VisitorApi {
  static getAllVisitors() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], visitors));
      }, delay);
    });
  }

  static saveVisitor(visitor) {
    visitor = Object.assign({}, visitor); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minVisitorTitleLength = 1;
        if (visitor.title.length < minVisitorTitleLength) {
          reject(`Title must be at least ${minVisitorTitleLength} characters.`);
        }

        if (visitor.id) {
          const existingVisitorIndex = visitors.findIndex(a => a.id == visitor.id);
          visitors.splice(existingVisitorIndex, 1, visitor);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new visitors in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          visitor.id = generateId(visitor);
          visitor.watchHref = `http://www.pluralsight.com/visitors/${visitor.id}`;
          visitors.push(visitor);
        }

        resolve(visitor);
      }, delay);
    });
  }

  static deleteVisitor(visitorId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfVisitorToDelete = visitors.findIndex(visitor => {
          visitor.id == visitorId;
        });
        visitors.splice(indexOfVisitorToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default VisitorApi;
