let db = require('../../db');

module.exports = {
    createUser: (user) => {
        db.users.push(user);

        return user;
    },

    getUsers: (query) => {
        return db.users.find({
            where: query
        })
    },

    deleteUser: (id) => {
        db = db.users.filter(user => user.id !== +id);

        return db;
    },

    getUserById: (id) => {
        return db.users.find(user => user.id === +id)
    }
}
