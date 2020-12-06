module.exports = (req, res, next) => {
    try {
        req.cars = cars;

        if (!cars) {
            throw new Error('Cars not exist in database');
        }

        next();
    } catch (e) {
        res.status(201).json(e.message);
    }

}


