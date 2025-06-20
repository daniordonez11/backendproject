const express = require("express");
const router = express.Router();
const imageController = require("../controllers/imageController");
const upload = require("../middleware/upload");

router.post("/upload", upload.single("image"), imageController.uploadImage);
router.get("/orden/:ordenId", imageController.getImagesByOrden);
router.delete("/:imageId", imageController.deleteImage);

module.exports = router;
