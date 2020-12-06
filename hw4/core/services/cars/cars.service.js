const {UserModel} = require("../../db/models");

module.exports = {
    createCar: (car) => UserModel.create(car),

    getAllCars: (query) => UserModel.findAll(query),

    getOneCar: (name) => UserModel.findOne({
        where: {name}
    }),

    deleteCar: (id) => UserModel.destroy({
        where: {id}
    }),
}
