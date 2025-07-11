var express = require('express');
const router = express.Router();
const registerControl = require('../app/controllers/LoginController');




router.post('/registerSuccess', registerControl.createAccount);

router.get('/', registerControl.renderRegister);

module.exports = router;