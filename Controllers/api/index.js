const router = require('express').Router();
const userRoutes = require('./userroutes');
const entryRoutes = require('./entryroutes');
const commentRoutes = require('./commentroutes');

router.use('/users', userRoutes)
router.use('/entries', entryRoutes)
router.use('/comments', commentRoutes)

module.exports = router;