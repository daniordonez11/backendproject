const { Router } = require('express')
const cors = require('cors');
const router = Router();

router.use(cors());

const authRoutes = require('./auth.routes')
const orderRoutes = require('./order.routes')
const itemRoutes = require('./item.routes')



router.use('/api/v1/auth', authRoutes);
router.use('/api/v1/auth', orderRoutes);
router.use('/api/v1/auth', itemRoutes);


module.exports = router;