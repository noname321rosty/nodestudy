const {carsService} = require('../../services');

module.exports = (req, res, next) => {
    try {
        const { model } =  req.body;

        let cars = carsService.getCars(model);

        if (!cars) {
            throw new Error('Cars exist in database');
        }

        next();
    } catch (e) {
        next(e);
    }

}







