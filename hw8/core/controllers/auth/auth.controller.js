const {authService} = require('../../services');
const tokinizer = require('../../helpers/tokinizer');
const {errorhandler, statusErrors: {TOKEN_NOT_FOUND, BAD_REQUEST}} = require("../../errors");
const {checkHash} = require("../../helpers");

module.exports = {
    createUser: async (req, res, next) => {
        try {
            const {id} = req.user;
            const token_pair = tokinizer();

            await authService.createTokenPair({user_id: id, ...token_pair});

            res.json('auf created');
        } catch (e) {
            next(e);
        }
    },

    loginUser: async (req, res, next) => {
        const {password} = req.body;
        const user = req.user;

        const status = await checkHash(user.password, password)

        if (!status) {
            return next(new errorhandler(BAD_REQUEST))
        }

        const token_pair = tokinizer();
        await authService.createTokenPair({user_id: user.id, ...token_pair});

        res.json(token_pair);
    },

    logoutUser: async (req, res, next) => {
        try {
            const access_token = req.get('Authorization');

            await authService.deleteByParams({access_token});

            res.json(204);
        } catch (e) {
            next(e);
        }
    },

    refreshToken: async (req, res, next) => {
        try {
            const refresh_token = req.get('Authorization')

            await authService.deleteByParams({refresh_token})


            console.log(req);
            const tokens = tokinizer();
            await authService.createTokenPair({...tokens, user_id: req.userId})

            res.json(tokens)
        } catch (e) {
            next(e);
        }
    }
};
