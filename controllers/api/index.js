const router = require('express').Router();
const homeRoutes = require('./home-routes.js');

router.use('/', homeRoutes);

router.get('/', (req, res) => {

})

module.exports = router;