const {UserModel} = require("../../db/models");

module.exports = {
    createUser: (user) => UserModel.create(user),

    getUsers: (query) => UserModel.findAll(query),

    getUser: (name) => UserModel.findOne({
        where: {name}
    }),

    deleteUser: (id) => UserModel.destroy({
        where: {id}
    }),

    getUserById: (id) => UserModel.findOne({
        where: {id}
    })
}
