const {carsService} = require('../../services');

module.exports = (req, res, next) => {
    try {
        let cars = carsService.getAllCars();

        if (cars) {
            throw new Error('Cars exist in database');
        }

        next();
    } catch (e) {
        res.status.json(e.message);
    }

}







