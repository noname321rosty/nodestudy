let users = [{name: 'admin' , password: '12345'}];

module.exports = {
    createUser: async (user) => {
        await users.push(user);

        return user;
    },

    getUsers: () => {
        return users;
    },

    getUserByName: (name) => {
        return users.find(user => user.name === name);
    }
}
