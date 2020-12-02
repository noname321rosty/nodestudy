module.exports = (req, res, next) => {
    try {
        const {name, password} = req.body;

        if (!name || !password) {
            throw new Error('Wrong name or password');
        }

        next()
    } catch (e) {
        res.status(204).json(e.message);
    }
}
