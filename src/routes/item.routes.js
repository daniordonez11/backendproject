const itemController = require('../controllers/itemController');
const express = require('express');
const router = express.Router();
// router.get('/', (req, res) => {
//     res.send('item route is working');
// })
// router.post('/login', loginValidationRules, validate, itemController.login);
// router.put('/cambiarclave/:id', itemController.cambiarclave);

router.get('/item', itemController.getAllItems);
router.get('/item:id', itemController.getItemById);
router.post('/item', itemController.createItem);
router.put('/item:id', itemController.updateItem);
router.delete('/item:id', itemController.deleteItem);


module.exports = router;