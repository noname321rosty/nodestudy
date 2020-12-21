const jwt = require('jsonwebtoken');

const {authService} = require("../../services");
const {SECRET} = require('../../configs/config');
const {errorhandler, statusErrors: {TOKEN_NOT_FOUND}} = require("../../errors");

module.exports = async (req, res, next) => {
    const token = req.get('Authorization');

    if (!token) {
        return next(new errorhandler(TOKEN_NOT_FOUND));
    }

    jwt.verify(token, SECRET, err => {
        if (err) {
            return next(new errorhandler('Not token', 401));
        }
    })

    const isTokenExist = await authService.getTokensByParams({refresh_token: token});

    if (!isTokenExist) {
        return next(new errorhandler('Not token', 401));
    }

    req.userId = isTokenExist.user_id;

    next();
}
