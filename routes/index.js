const router = require('express')();
const admin = require('./administrative');
const personal = require('./personal');

// api Routes
router.use(admin);
router.use(personal);

// if no routes are hit, go to react app
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;
