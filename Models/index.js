const User = require('./user');
const Entry = require('./entry');
const Comment = require('./comment');

User.hasMany(Entry);
Entry.belongsTo(User);

User.hasMany(Comment);
Comment.belongsTo(User);

Entry.hasMany(Comment);
Comment.belongsTo(Entry);

module.exports = { User:User, Entry:Entry, Comment:Comment }