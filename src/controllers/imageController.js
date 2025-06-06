const imageRepository = require("../repositories/imageRepository");
const imageAdapter = require("../adapters/imageAdapter");
const cloudinary = require('../config/cloudinary');

const imageController = {
  async uploadImage(req, res) {
    try {
      const { ordenId } = req.body;
      if (!req.file) {
        return res.status(400).json({ message: "No se recibió archivo" });
      }
      if (!ordenId) {
        return res.status(400).json({ message: "ordenId es requerido" });
      }

      // Sube el archivo local a Cloudinary
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: 'ordenes_images', // carpeta en Cloudinary (opcional)
      });

      // Prepara datos para guardar en BD, usando URL de Cloudinary
      const imageData = {
        nombre: req.file.originalname,
        urlImagen: result.secure_url,
        ordenId: parseInt(ordenId),
      };

      // Guarda el registro en BD
      const savedImage = await imageRepository.create(imageData);

      // Opcional: borrar archivo local luego de subir a Cloudinary
      const fs = require('fs');
      fs.unlink(req.file.path, (err) => {
        if (err) console.error('Error al borrar archivo local:', err);
      });

      return res.status(201).json(savedImage);

    } catch (error) {
      console.error("Error al subir imagen:", error);
      return res.status(500).json({ message: "Error interno al subir imagen" });
    }
  },

  async getImagesByOrden(req, res) {
    try {
      const { ordenId } = req.params;
      const images = await imageRepository.findByOrdenId(ordenId);
      res.json(images);
    } catch (error) {
      console.error("Error al obtener imágenes:", error);
      res.status(500).json({ message: "Error interno" });
    }
  },
};

module.exports = imageController;
