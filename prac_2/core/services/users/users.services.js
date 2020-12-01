let db = require('../../db');

module.exports = {
    createUser: (user) => {
        db.users.push(user);

        return user;
    },

    getUsers: () => {
        return db;
    },

    getUserByEmailOrName: (email, name) => {
        return db.users.find(user => user.email === email || user.name === name);
    },

    deleteUser: (id) => {
        db = db.users.filter(user => user.id !== +id);

        return db;
    },

    getUserById: (id) => {
        return db.users.find(user => user.id === +id)
    }
}
