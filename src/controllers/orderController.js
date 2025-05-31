const orderAdapter = require('../adapters/orderAdapter');
const bcrypt = require('bcrypt');
const { Ordenes, Usuarios } = require('../models');

const getAllOrders = async (req, res, next) => {
    try{
        const Orders = await orderAdapter.getAllOrders();
        res.status(200).json(Orders);
    }
    catch (error) {
            console.log('Error fetching Orders:', error);
            res.status(500).json({ message: 'Error fetching Orders', error: error.message });
        }
}

const getOrderById = async (req, res, next) => {
    try{
        const id=req.params.id
        const Order = await orderAdapter.getOrderById(id);
        res.status(200).json(Order);
    }
    catch (error) {
            console.log('Error fetching Order:', error);
            res.status(500).json({ message: 'Error fetching Order' });
        }
}

const createOrder = async (req, res) => {
  try {
    const orderData = req.body;
    const newOrder = await Ordenes.create(orderData);
    res.status(201).json(newOrder);
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ message: 'Error creating order' });
  }
}

const updateOrder = async (req, res, next) => {
    try{
        const id=req.params.id
        const OrderData = req.body;
        const Order = await orderAdapter.updateOrder(id, OrderData);
        res.status(200).json(Order);
    }
    catch (error) {
            console.log('Error updating Order:', error);
            res.status(500).json({ message: 'Error updating Order' });
        }
}

const deleteOrder = async (req, res, next) => {
    try{
        const id=req.params.id
        const Order = await orderAdapter.deleteOrder(id);
        res.status(200).json(Order);
    }
    catch (error) {
            console.log('Error deleting Order:', error);
            res.status(500).json({ message: 'Error deleting Order' });
        }
}

const cambiarEstado = async (req, res, next) => {
    try {
        const id = req.params.id;
        const { estado } = req.body;

        if (!estado) {
            return res.status(400).json({ message: 'El campo estado es obligatorio' });
        }

        const updatedOrder = await orderAdapter.cambiarEstado(id, estado);

        res.status(200).json(updatedOrder);
    } catch (error) {
        console.error('Error changing order status:', error);
        res.status(500).json({ message: 'Error updating order status' });
    }
};

module.exports = {
    getAllOrders,
    getOrderById,
    createOrder,
    updateOrder,
    deleteOrder,
    cambiarEstado,
}