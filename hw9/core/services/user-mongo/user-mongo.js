const userModel = require('../../db/mongo-models/users');

module.exports = {
    createUser: (userToCreate) => new userModel(userToCreate).save(),

    deleteUser: (id) => userModel.findByIdAndDelete(id),

    findOne: (params) => userModel.findOne(params),

    findAll: () => userModel.find({}).limit(1)
};
