const {carService} = require('../../services');

module.exports = (req, res, next) => {
    try {
        let user = carService.getAllCars();

        if (!user) {
            throw new Error('Cars not exist in database');
        }

        next();
    } catch (e) {
        res.status(201).json(e.message);
    }

}


