const { User } = require('../Models');

const userData = [

    {
        username: "jj93",
        email: "jj@jj.com",
        password: "nunyabizns"
    },
    {
        username: "cc91",
        email: "cc@cc.com",
        password: "allyabizzns"
    },
    {
        username: "gg96",
        email: "gg@gg.com",
        password: "allupinyabizzns"
    }


]

const seedUsers = () => {
    User.bulkCreate(userData);
}

module.exports = seedUsers;