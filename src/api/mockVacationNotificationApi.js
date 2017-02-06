import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const vacationNotifications = [
  {
    id: "1",
    title: "A new vacationNotification number one",
    watchHref: "http://localhost:3000/communities/1/vacationNotifications/1",
    vacationNotificationDetail: "Some VacationNotification details goes here for one",
    vacationNotificationDate: "01/27/2017",
    vacationNotificationTime: "5:08 PM",
    securityGuardNotes: "Some guard notes for one",
    vacationNotificationSeverity: "high",
  },
  {
    id: "2",
    title: "A new vacationNotification number two",
    watchHref: "http://localhost:3000/communities/1/vacationNotifications/2",
    vacationNotificationDetail: "Some VacationNotification details goes here for two",
    vacationNotificationDate: "01/29/2017",
    vacationNotificationTime: "6:25 PM",
    securityGuardNotes: "Some guard notes for two",
    vacationNotificationSeverity: "medium",
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (vacationNotification) => {
  return replaceAll(vacationNotification.title, ' ', '-');
};

class VacationNotificationApi {
  static getAllVacationNotifications() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], vacationNotifications));
      }, delay);
    });
  }

  static saveVacationNotification(vacationNotification) {
    vacationNotification = Object.assign({}, vacationNotification); // to avoid manipulating object passed in.

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minVacationNotificationTitleLength = 1;
        if (vacationNotification.title.length < minVacationNotificationTitleLength) {
          reject(`Title must be at least ${minVacationNotificationTitleLength} characters.`);
        }
        if (vacationNotification.id) {
          const existingVacationNotificationIndex = vacationNotifications.findIndex(a => a.id == vacationNotification.id);
          vacationNotifications.splice(existingVacationNotificationIndex, 1, vacationNotification);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new vacationNotifications in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          vacationNotification.id = generateId(vacationNotification);
          vacationNotification.watchHref = `http://localhost:3000/communities/1/vacationNotifications/${vacationNotification.id}`;
          vacationNotifications.push(vacationNotification);
        }

        resolve(vacationNotification);
      }, delay);
    });
  }

  static deleteVacationNotification(vacationNotificationId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfVacationNotificationToDelete = vacationNotifications.findIndex(vacationNotification => {
          vacationNotification.id == vacationNotificationId;
        });
        vacationNotifications.splice(indexOfVacationNotificationToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default VacationNotificationApi;
