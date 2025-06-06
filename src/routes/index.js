require('dotenv').config();
const { Router } = require('express')
const cors = require('cors');
const router = Router();
const path = require('path');
const fs = require('fs');

router.use(cors());

const authRoutes = require('./auth.routes')
const orderRoutes = require('./order.routes')
const itemRoutes = require('./item.routes')
const imageRoutes = require('./image.routes')

router.use('/api/v1/auth', authRoutes);
router.use('/api/v1/auth', orderRoutes);
router.use('/api/v1/auth', itemRoutes);
router.use('/api/v1/auth/images', imageRoutes);

const uploadDir = path.join(__dirname, '..', 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}


module.exports = router;