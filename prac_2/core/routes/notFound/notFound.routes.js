const {Router} = require('express');

const notFoundRouter = Router();

notFoundRouter.all('*', (req, res) => {
    res.end('Router not found')
})

module.exports = notFoundRouter;
