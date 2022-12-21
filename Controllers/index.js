const router = require('express').Router();
const apiRoutes = require('./api')
const frontendRoutes = require('./frontendroutes')


router.use('/api', apiRoutes);
router.use(frontendRoutes);

module.exports = router;