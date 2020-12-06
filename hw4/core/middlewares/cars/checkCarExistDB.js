const {carService} = require('../../services');

module.exports = (req, res, next) => {
    try {
        let cars = carService.getAllCars();

        if (!cars) {
            throw new Error('Cars not exist in database');
        }

        req.cars = cars;

        next();
    } catch (e) {
        res.status(201).json(e.message);
    }

}


