const {carsService} = require('../../services');
const {errorhandler , statusErrors: {BAD_REQUEST}} = require('../../errors');

module.exports = (req, res, next) => {
    try {
        const { model } =  req.body;

        let cars = carsService.getCars(model);

        if (cars) {
            throw new errorhandler(
                BAD_REQUEST.message,
                BAD_REQUEST.code
            );
        };

        next();
    } catch (e) {
        next(e);
    }

}


