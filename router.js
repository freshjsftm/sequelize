const {Router} = require('express');
const UserController = require('./controllers/user.controller');

const router = Router();
router.post('/user', UserController.createUser);

module.exports = router;