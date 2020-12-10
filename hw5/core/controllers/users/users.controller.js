const {usersService} = require("../../services");

module.exports = {
    getAllUsers: async (req, res) => {
        const user = await usersService.getUsers(req.query);

        res.json(user);
    },
    createUser: async (req, res) => {
       const user = req.body;

       const createdUser = await usersService.createUser(user);

       res.json(createdUser);
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
    deleteUser: async (req, res) => {
        const {id} = req.params;

        const deletedUser =  await usersService.deleteUser(id);

        res.json(deletedUser);
    }
}

