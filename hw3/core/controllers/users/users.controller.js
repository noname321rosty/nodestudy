const {usersService} = require("../../services");


module.exports = {
    getAllUsers: (req, res) => {

        const users = usersService.getUsers();

        res.json(users);
    },

    getUserByEmailOrName: (req, res) => {
        const {email, name} = req.query;

        const user = usersService.getUserByEmailOrName(email, name);

        res.json(user);
    },
    createUser: (req, res) => {
        const user = req.body;

        const createdUser = usersService.createUser(user);

        res.json(createdUser);
    },
    deleteUser: (req, res) => {
        const {id} = req.params;

        const rm = usersService.deleteUser(id)

        res.json(rm);
    }
}

