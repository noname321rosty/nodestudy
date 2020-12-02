const {usersService} = require("../../services");

module.exports = {
    getAllUsers: (req, res) => {
        const user = usersService.getUsers(req.query);

        res.json(user);
    },
    createUser: (req, res) => {
        const user = req.body;
        const createdUser = usersService.createUser(user);

        res.status(201).json(createdUser);
    },
    getUserByEmailOrName: (req, res) => {
        const {email, name} = req.query;

        const user = usersService.getUserByEmailOrName(email, name);

        res.json(user);
    },
    deleteUser: (req, res) => {
        const {id} = req.params;
        const rm = usersService.deleteUser(id);

        res.status(204).json(rm);
    }
}

