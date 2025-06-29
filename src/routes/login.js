var express = require('express');
const router = express.Router();
const loginController = require('../app/controllers/LoginController')

// Route doc tu tren xuong, neu cac route con phai dat tren route cha
// Khi doc tu tren xuong thi phai cho js khop cac route con truoc de chay vao route chinh xac
router.use('/childRoute', loginController.childRoute);

router.use('/', loginController.index);



module.exports = router;