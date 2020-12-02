const {usersService} = require("../../services");

module.exports = {
    getAllUsers: (req, res) => {
        const user = usersService.getUsers(req.query);

        res.status(400).json(user);
    },
    createUser: (req, res) => {
        const user = req.body;
        const createdUser = usersService.createUser(user);

        res.status(201).json(createdUser);
    },
    deleteUser: (req, res) => {
        const {id} = req.params;
        const rm = usersService.deleteUser(id);

        res.status(200).json(rm);
    }
}

