const {authService} = require('../../services');
const tokinizer = require('../../helpers/tokinizer');

module.exports = {
    createUser: async (req, res, next) => {
        try{
            const { id } = req.user;
            const token_pair = tokinizer();

            await authService.createTokenPair({user_id: id, ...token_pair});

            res.json('auf created');
        } catch(e){
            next(e);
        }
    }

};
