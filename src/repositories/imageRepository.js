const { Images } = require("../models");

const imageRepository = {
  async create(data) {
    return await Images.create(data);
  },
  async findByOrdenId(ordenId) {
    return await Images.findAll({ where: { ordenId } });
  },
};

module.exports = imageRepository;
