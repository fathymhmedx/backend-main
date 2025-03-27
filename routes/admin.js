const express = require('express');
const router = express.Router();
const adminController = require('../controller/admin');
const { loginValidationRules } = require('../validators/adminValidator');
const validateRequest = require('../middlewares/validateRequest');//POST /api/admin / login
router.post(
    '/login',
    loginValidationRules(),
    validateRequest,
    adminController.login
);

module.exports = router;