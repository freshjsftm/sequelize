const {Router} = require('express');
const taskRouter = require('./task');
const userRouter = require('./user');

const router = Router();

router.use('/users',userRouter);
router.use('/tasks',taskRouter);

module.exports = router;