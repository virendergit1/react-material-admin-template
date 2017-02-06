import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const profiles = [
  {
    id: "1",
    title: "A new profile number one",
    watchHref: "http://localhost:3000/communities/1/profiles/1",
    profileDetail: "Some Profile details goes here for one",
    profileDate: "01/27/2017",
    profileTime: "5:08 PM",
    securityGuardNotes: "Some guard notes for one",
    profileSeverity: "high",
  },
  {
    id: "2",
    title: "A new profile number two",
    watchHref: "http://localhost:3000/communities/1/profiles/2",
    profileDetail: "Some Profile details goes here for two",
    profileDate: "01/29/2017",
    profileTime: "6:25 PM",
    securityGuardNotes: "Some guard notes for two",
    profileSeverity: "medium",
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (profile) => {
  return replaceAll(profile.title, ' ', '-');
};

class ProfileApi {
  static getAllProfiles() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], profiles));
      }, delay);
    });
  }

  static saveProfile(profile) {
    profile = Object.assign({}, profile); // to avoid manipulating object passed in.

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minProfileTitleLength = 1;
        if (profile.title.length < minProfileTitleLength) {
          reject(`Title must be at least ${minProfileTitleLength} characters.`);
        }
        if (profile.id) {
          const existingProfileIndex = profiles.findIndex(a => a.id == profile.id);
          profiles.splice(existingProfileIndex, 1, profile);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new profiles in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          profile.id = generateId(profile);
          profile.watchHref = `http://localhost:3000/communities/1/profiles/${profile.id}`;
          profiles.push(profile);
        }

        resolve(profile);
      }, delay);
    });
  }

  static deleteProfile(profileId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfProfileToDelete = profiles.findIndex(profile => {
          profile.id == profileId;
        });
        profiles.splice(indexOfProfileToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default ProfileApi;
