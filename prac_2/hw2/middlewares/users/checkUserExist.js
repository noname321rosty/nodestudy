const {usersService} = require('../../services');

module.exports = (req,res) => {

    const {name} = req.body;

    let user = usersService.getUserByName(name);

    if (user) {
        alert('User already exist')
    }
}



