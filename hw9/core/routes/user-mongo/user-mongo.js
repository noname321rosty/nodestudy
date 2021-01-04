const { Router } = require('express');
const { deleteUser, createUser } = require('../../services/user-mongo');

const userRouter = Router();

userRouter.post('/', async (req, res) => {
    const user = req.body;
    const newVar = await createUser(user);

    res.json(newVar);
});

userRouter.delete('/:userId', async (req, res) => {
    const { userId } = req.params;
    const newVar = await deleteUser(userId);

    res.json(newVar);
});
