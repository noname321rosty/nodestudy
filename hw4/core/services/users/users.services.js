let db = require('../../db/index')

module.exports = {
    createUser: (user) => {
        db.users.push(user);

        return user;
    },

    getUsers: () => {
        const UserModel = db.users.getModel('User');

        return UserModel.findAll();
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
