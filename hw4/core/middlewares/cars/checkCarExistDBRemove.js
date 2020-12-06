module.exports = (req, res, next) => {
    try {
        req.cars = cars;

        if (cars) {
            throw new Error('Cars exist in database');
        }

        next();
    } catch (e) {
        res.status.json(e.message);
    }

}







