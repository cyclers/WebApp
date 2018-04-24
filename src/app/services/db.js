// https://egghead.io/lessons/javascript-creating-demo-apis-with-json-server
// go to cd src/app/services
// type             json-server wat.js
//make a post command via app.component.ts

var _ = require("lodash");
var faker = require("faker");

module.exports = function() {
  return {
    browse: _.times(100, n => {
      return {
        id: n
        // Name: faker.name.findName(),
        // HiringDate: faker.date.past(),
        // Division: faker.commerce.department(),
        // Department,
        // Title,
        // Costcenter,
        // BU,
        // EmploymentStatus,
        // EndDate
      };
    }),

    Nas: _.times(100, n => {
      return {
        id: n,
        name: faker.name.findName(),
        avatar: faker.finance.amount()
      };
    })
  };
};
