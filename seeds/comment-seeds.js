const { Comment } = require('../Models');

const commentData = [
    {
        
    }
]

const seedComments = () => {
    Comment.bulkCreate(commentData);
}

module.exports = seedComments(commentData);