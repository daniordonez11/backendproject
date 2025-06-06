const path = require("path");

const imageAdapter = {
  buildImageData(file, ordenId) {
    return {
      nombre: file.originalname,
      urlImagen: `uploads/${file.filename}`, // <-- usa siempre /, no \
      ordenId: parseInt(ordenId),
    };
  },
};

module.exports = imageAdapter;