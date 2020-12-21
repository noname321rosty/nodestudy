const {Router} = require('express');

const { authController } = require('../../controllers');
const { authMiddlewares, usersMiddlewares } = require('../../middlewares');

const authRouter = Router();

authRouter.post('/',usersMiddlewares.checkUsersValid , authMiddlewares.checkAccessToken , authController.createUser);
authRouter.post('/login', usersMiddlewares.checkUsersExistDB, authController.loginUser);
authRouter.post('/refresh', authMiddlewares.checkRefreshToken, authController.refreshToken);
authRouter.post('/logout', authController.logoutUser);


module.exports = authRouter;


