const router = require('express-router');
const personalController = require('../controllers/personal');

// for an individual account
router.route('/account/:id')
    .put(personalController.create)
    .delete(personalController.delete)
    .get(personalController.read)
    .post(personalController.update)
    

module.exports = router;