module.exports = (req, res, next) => {
    try {
        req.user = user;

        if (user) {
            throw new Error('User exist in database');
        }

        next();
    } catch (e) {
        res.status.json(e.message);
    }

}







