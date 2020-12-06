module.exports = (req, res, next) => {
    try {
        req.user = user;

        if (!user) {
            throw new Error('User not exist in database');
        }

        next();
    } catch (e) {
        res.status(201).json(e.message);
    }

}



