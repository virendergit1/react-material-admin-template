import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const communities = [{}];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (community) => {
  return replaceAll(community.accountNumber, ' ', '-');
};

class CommunityApi {
  static getAllCommunities() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], communities));
      }, delay);
    });
  }

  static saveCommunity(community) {
    community = Object.assign({}, community); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        if (community.accountNumber) {
          const existingCommunityIndex = communities.findIndex(a => a.accountNumber == community.accountNumber);
          communities.splice(existingCommunityIndex, 1, community);          
        }
        resolve(community);
      }, delay);
    });
  }

  static deleteCommunity(communityId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfCommunityToDelete = communities.findIndex(community => {
          community.id == communityId;
        });
        communities.splice(indexOfCommunityToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default CommunityApi;
