const {usersService} = require("../../services");
const {hashPassword, checkHash} = require('../../helpers');
const {errorhandler} = require('../../errors');
const {statusErrors: {BAD_REQUEST}} = require('../../errors');

module.exports = {
    getAllUsers: async (req, res) => {
        const user = await usersService.getUsers(req.query);

        res.json(user);
    },
    createUser: async (req, res) => {
        const user = req.body;

        user.password = await hashPassword(user.password);
        const createdUser = await usersService.createUser(user);

        res.json(createdUser);
    },
    getOneUser: async (req, res) => {
        const {name} = req.name;

        const user = await usersService.getUser(name);

        res.json(user);
    },
    getUserByEmailOrName: async (req, res) => {
        const user = await usersService.getUsers(req.query);

        res.json(user);
    },
    deleteUser: async (req, res) => {
        const {id} = req.params;

        const deletedUser = await usersService.deleteUser(id);

        res.json(deletedUser);
    },
    loginUser: (req, res, next) => {
        const {password} = req.body;
        const user = req.user;

        const status = checkHash(user.password, password);

        if (!status) {
            return next(new errorhandler(
                BAD_REQUEST.message,
                BAD_REQUEST.code
            ));
        }

        res.json(user);
    },
    updateUser: async (req,res,next) => {
        const {password} = req.body;
        const user = req.user;

        const status = await checkHash(user.password , password);

        if (!status){
            return next(new errorhandler(
                BAD_REQUEST.message,
                BAD_REQUEST.code
            ))
        }

    }
}

