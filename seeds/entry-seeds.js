const { Entry } = require('../Models');

const entryData = [

    {
        title: "post 1",
        content: "this is post 1",
    },
    {
        title: "post 2",
        content: "this is post 2",
    },
    {
        title: "post 3",
        content: "this is post 3",
    },
    {
        title: "post 4",
        content: "this is post 4",
    },
    {
        title: "post 5",
        content: "this is post 5",
    },
    {
        title: "post 6",
        content: "this is post 6",
    }
]

const seedEntries = () => {
    Entry.bulkCreate(entryData);
}

module.exports = seedEntries(entryData);