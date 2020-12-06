const {usersService} = require("../../services");

module.exports = {
    getAllUsers: async (req, res) => {
        const user = await usersService.getUsers(req.query);

        res.json(user);
    },
    createUser: (req, res) => {
        try {
            usersService.createUser(req.user);

            res.status(201).json('user created');
        } catch (e){
            res.json(e.message);
        }
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
        try{
            usersService.deleteUser(req.id);

            res.status(204).json('user removed');
        }catch (e){
            res.json(e.message);
        }
    }
}

