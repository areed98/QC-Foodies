const router = require('express').Router();
const homeRoutes = require('./home-routes.js');

router.use('/', homeRoutes);
// router.use('/dashboard', dashboardRoutes);

router.get('/', (req, res) => {

});

router.post('/', (req, res) => {

})

module.exports = router;