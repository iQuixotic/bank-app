const router = require('express')();
const adminController = require('../controllers/administrative');

// for getting all data
router.route('/allData')
    .get(adminController.read)

module.exports = router;