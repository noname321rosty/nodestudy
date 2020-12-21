const {Router} = require('express');

const { authController } = require('../../controllers');
const { authMiddlewares, usersMiddlewares } = require('../../middlewares');

const authRouter = Router();

authRouter.post('/',usersMiddlewares.checkUsersValid , authMiddlewares , authController.createUser);

module.exports = authRouter;


