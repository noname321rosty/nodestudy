const TokenModal = require('../../db/models/token');

module.exports = {
    createTokenPair: (tokenPair) => {
        return TokenModal.create(tokenPair);
    },

    deleteByParams: async (params) => {
        return  TokenModal.destroy({
            where: params
        })
    },

    getTokensByParams: (params) => {
        return TokenModal.findOne({
            where: params
        })
    }

}
