const {Router} = require('express');

const {usersController} = require('../../controllers');
const {usersMiddlewares} = require('../../middlewares');

const usersRouter = Router();

usersRouter.get('/' , usersController.getAllUsers);

usersRouter.get('/:name', usersController.getUser);

usersRouter.post('/',usersMiddlewares.checkUsersValid, usersMiddlewares.checkUserExist, usersController.createUser);
//,usersMiddlewares.checkUsersValid, usersMiddlewares.checkUserExist

module.exports = usersRouter;


