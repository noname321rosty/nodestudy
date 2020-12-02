const {usersService} = require("../../services");

module.exports = {
    getAllUsers: (req, res) => {
        const {email, name} = req.query;

        if (req.query){
            const user = usersService.getUsers(email, name);
            res.status(400).json(user);
        }

        const users = usersService.getUsers();
        res.status(400).json(users);
    },
    // getUserByEmailOrName: (req, res) => {
    //     const {email, name} = req.query;
    //     const user = usersService.getUsers(email, name);
    //
    //     res.status(400).json(user);
    // },
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

