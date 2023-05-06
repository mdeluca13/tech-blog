// Setting api Routes
const router = require('express').Router();

const commentRoutes = require('./comment-routes');
const userRoutes = require('./user-routes');
const postRoutes = require ('./post-routes');

router.use('/api', apiRoutes);
router.use('/', homepageRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;