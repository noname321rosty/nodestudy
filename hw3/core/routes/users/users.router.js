const {Router} = require('express');

const {usersController} = require('../../controllers');
const {usersMiddlewares} = require('../../middlewares');

const usersRouter = Router();

usersRouter.post('/', usersMiddlewares.checkUsersValid, usersMiddlewares.checkUserExist, usersController.createUser);

usersRouter.get('/', usersController.getAllUsers);

usersRouter.get('/query', usersController.getUserByEmailOrName);

usersRouter.delete('/:id', usersMiddlewares.checkUsersExistRemove, usersController.deleteUser);

module.exports = usersRouter;


