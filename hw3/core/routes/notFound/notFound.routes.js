const {Router} = require('express');

const notFoundRouter = Router();

notFoundRouter.all('*', (req, res) => {
    res.status(404).end('Router not found')
})

module.exports = notFoundRouter;
