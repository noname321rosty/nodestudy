const {Router} = require('express');

const { usersController } = require('../../controllers');
const { usersMiddlewares } = require('../../middlewares');

const usersRouter = Router();

usersRouter.post('/', usersMiddlewares.checkUsersExistDB, usersMiddlewares.checkUsersValid,  usersController.createUser);

usersRouter.post('/login', usersMiddlewares.checkUsersExistDB, usersMiddlewares.checkUsersValid, usersController.loginUser);

usersRouter.get('/', usersController.getAllUsers);

usersRouter.get('/:name', usersController.getOneUser)

usersRouter.get('/query', usersController.getUserByEmailOrName);

usersRouter.put('/:id' , usersController.updateUser)

usersRouter.delete('/:id', usersMiddlewares.checkUsersExistDBRemove, usersController.deleteUser);

module.exports = usersRouter;


