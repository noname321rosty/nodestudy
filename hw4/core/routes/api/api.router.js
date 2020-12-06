const usersRouter = require('../users/users.router');
const carsRouter = require('../cars/cars.router');

const {Router} = require('express');

const apiRouter = Router();

apiRouter.use('/users', usersRouter);

apiRouter.use('/cars', carsRouter);

module.exports = apiRouter;
