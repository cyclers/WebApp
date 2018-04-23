var _ = require('lodash');
var  faker = require("faker");

module.exports = function (){
    

    return { browse: _.times(100, (n) => {
        return {
            id: n,
            // Name: faker.name.findName(),
            // HiringDate: faker.date.past(),
            // Division: faker.commerce.department(),
            // Department,
            // Title,
            // Costcenter,
            // BU,
            // EmploymentStatus,
            // EndDate


        }
    }),
    
    Nas: _.times(100, (n) => {
        return {
            id: n,
            name: faker.name.findName(),
            avatar: faker.finance.amount()

        }
    })



}

}


    