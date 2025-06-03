const express = require('express');
const authController = require('../controllers/authController');
const {loginValidationRules, validate} = require('../middleware/validaciones/login');


const router = express.Router();
// router.get('/', (req, res) => {
//     res.send('Auth route is working');
// })
router.post('/login', loginValidationRules, validate, authController.login);
router.put('/cambiarclave/:id', authController.cambiarclave);

router.get('/usuario', authController.getAllUsers);
router.get('/usuario/:id', authController.getUserById);
router.post('/usuario', authController.createUser);
router.put('/usuario/:id', authController.updateUser);
router.delete('/usuario/:id', authController.deleteUser);


module.exports = router;
