const {usersService} = require('../../services');

module.exports = {
    getAllUsers: (req,res) => {
        const users = usersService.getUsers()

        req.body(users);
        console.log(res.json(users));;

    },
    getUser: (req,res) => {
        const {name} = req.params;

        const user = usersService.getUserByName(name)

        res.json(user)
    },
    createUser: (req,res) => {
        const user  = req.body;

        const createdUser = usersService.createUser(user);

        res.json(createdUser)
    }
}

