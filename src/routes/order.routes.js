const orderController = require('../controllers/orderController');
const express = require('express');
const router = express.Router();
// router.get('/', (req, res) => {
//     res.send('order route is working');
// })
// router.post('/login', loginValidationRules, validate, orderController.login);
// router.put('/cambiarclave/:id', orderController.cambiarclave);

router.get('/order', orderController.getAllOrders);
router.get('/order:id', orderController.getOrderById);
router.post('/order', orderController.createOrder);
router.put('/order:id', orderController.updateOrder);
router.delete('/order:id', orderController.deleteOrder);


module.exports = router;