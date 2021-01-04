const usersRouter = require('../users/users.router');
const carsRouter = require('../cars/cars.router');
const authRouter = require('../auth/auth.router');
const userMongoRouter = require('../user-mongo/user-mongo');

const {Router} = require('express');

const apiRouter = Router();

apiRouter.use('/users', usersRouter);

apiRouter.use('/cars', carsRouter);

apiRouter.use('/auth', authRouter);

apiRouter.use('/mongo', userMongoRouter)

module.exports = apiRouter;
