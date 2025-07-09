var express = require('express');
const router = express.Router();
const registerControl = require('../app/controllers/LoginController');


router.get('/', registerControl.renderRegister);

router.post('/registerSuccess', registerControl.createAccount);

module.exports = router;