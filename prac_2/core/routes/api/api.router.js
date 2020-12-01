const usersRouter = require('../users/users.router');

const {Router} = require('express');

const apiRouter = Router();

apiRouter.use('/users', usersRouter);

module.exports = apiRouter;
