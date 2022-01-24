const {Router} = require('express');
const UserController = require('./controllers/user.controller');

const router = Router();
router.post('/user', UserController.createUser);
router.get('/users', UserController.getAllUsers);

router.patch('/user/:id', UserController.updateUser);
router.patch('/user-v2/:id', UserController.updateUserInstance);

module.exports = router;