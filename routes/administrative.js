const router = require('express')();
const adminController = require('../controllers/administrative');

// for getting all data
router.route('/allAccountsData')
    .get(adminController.read)

router.route('allAccountsData/:id')
    .delete(adminController.erase)
    
module.exports = router;