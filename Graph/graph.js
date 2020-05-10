// *****************************************************
// ********************** GRAPHS ***********************
// *****************************************************

// you work for a professional social network. in this social 
// network, a professional can follow other people to see their 
// updates (think Twitter for professionals.) write a function 
// that finds the job `title` that shows up most frequently given
// a set of degree of separation from you. count the initial 
// id's own job title in the total

/*
parameters:
myId                - number    - the id of the user who is the root node
getUser             - function - a function that returns a user's object given an ID
degreesOfSeparation - number   - how many degrees of separation away to look on the graph
*/

const findMostCommonTitle = (myId, getUser, degreesOfSeparation) => {
  let queue = [myId];
  const seen = new Set();
  const jobs = {};
  
  for (let i = 0; i <= degreesOfSeparation; i++) {
    queue = queue
      .filter((id) => !seen.has(id))
      .map(getUser)
      .map(user => {
        jobs[user.title] = jobs[user.title] ? jobs[user.title] + 1 : 1;
        seen.add(user.id)
        return user;
      })
      .map((user) => user.connections)
      .reduce((acc, users) => acc.concat(users), [])
  }
  return Object.keys(jobs)
    .map((job) => [job, jobs[job]])
    .sort((a, b) => {
      if (a[1] > b[1]) return -1;
      if (a[1] < b[1]) return 1;
      return 0;
    })[0][0]
}

// Jasmine unit tests
// do not modify the below code
// describe('findMostCommonTitle', function() {
//   // the getUser function and data comes from this CodePen: 
//      https://codepen.io/btholt/pen/NXJGwa?editors=0010
//   it('user 30 with 2 degrees of separation', () => {
//     expect(findMostCommonTitle(30, getUser, 2)).toBe("Librarian");
//   });
  
//   it('user 11 with 3 degrees of separation', () => {
//     expect(findMostCommonTitle(11, getUser, 3)).toBe("Graphic Designer");
//   });
  
//   it('user 307 with 4 degrees of separation', () => {
//     // if you're failing here with "Clinical Specialist, 
//        you're probably not filtering users who
//     // appear more than once in people's connections
//     expect(findMostCommonTitle(306, getUser, 4)).toBe("Environmental Tech");
//   });
// });

// describe('extra credit', function() {
//   it('user 1 with 7 degrees of separation – this will traverse every user 
//     that\'s followed by someone else. five users are unfollowed', () => {
//     expect(findMostCommonTitle(1, getUser, 7)).toBe("Geological Engineer");
//   });
// })

// MORE INFO: https://btholt.github.io/four-semesters-of-cs-part-two/graphs/