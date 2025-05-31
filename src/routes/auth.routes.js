const express = require('express');
const authController = require('../controllers/authController');
const {loginValidationRules, validate} = require('../middleware/validaciones/login');


const router = express.Router();
// router.get('/', (req, res) => {
//     res.send('Auth route is working');
// })
router.post('/login', loginValidationRules, validate, authController.login);
router.put('/cambiarclave/:id', authController.cambiarclave);

router.get('/', authController.getAllUsers);
router.get('/:id', authController.getUserById);
router.post('/', authController.createUser);
router.put('/:id', authController.updateUser);
router.delete('/:id', authController.deleteUser);


module.exports = router;
