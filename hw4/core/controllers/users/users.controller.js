const {usersService} = require("../../services");

module.exports = {
    getAllUsers: async (req, res) => {
        const user = await usersService.getUsers(req.query);

        res.json(user);
    },
    createUser: async (req, res) => {
        req.user = user;
        const createdUser = await usersService.createUser(user);

        res.json(createdUser)
    },
    getOneUser: async (req,res) => {
        const {name} = req.name;

        const user = await usersService.getUser(name);

        res.json(user);
    },
    getUserByEmailOrName: async (req, res) => {
        const user = await usersService.getUsers(req.query);

        res.json(user);
    },
    deleteUser: (req, res) => {
        req.id = { id };
        const rm = usersService.deleteUser(id);

        res.status(204).json(rm);
    }
}

