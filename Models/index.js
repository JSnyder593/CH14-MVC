const User = require('./user');
const Entry = require('./entry');
const Comment = require('./comment');

User.hasMany(Entry, {
    onDelete: "CASCADE"
});

Entry.belongsTo(User);

User.hasMany(Comment, {
    onDelete: "CASCADE"
});

Comment.belongsTo(User);

Entry.hasMany(Comment, {
    onDelete: "CASCADE"
});

Comment.belongsTo(Entry);

module.exports = { User, Entry, Comment }