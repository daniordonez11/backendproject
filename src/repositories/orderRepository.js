const db = require('../models');
const Order = db.Ordenes;
const Usuario = db.Usuarios;
const bcrypt = require('bcrypt');
const { enviarCredencialesCliente } = require('../utils/emailService');

const getAllOrders = async () => {
    try {
        const Orders = await Order.findAll({
            attributes: [
                'id',
                'usuarioId',
                'nombreCliente',
                'telefonoCliente',
                'emailCliente',
                'modeloPc',
                'numeroSeriePc',
                'estadoInicial',
                'accesoriosEntregados',
                'estado',
                'createdAt',
                'updatedAt',
                'clienteId'
            ]
        });
        return Orders;
    } catch (error) {
        console.error('Error fetching Orders:', error);
        throw error;
    }
};

const getOrderById = async (id) => {
    try {
        const order = await Order.findByPk(id, {
            attributes: [
                'id',
                'usuarioId',
                'nombreCliente',
                'telefonoCliente',
                'emailCliente',
                'modeloPc',
                'numeroSeriePc',
                'estadoInicial',
                'accesoriosEntregados',
                'estado',
                'createdAt',
                'updatedAt',
                'clienteId'
            ]
        });
        return order;
    } catch (error) {
        console.error('Error fetching Order:', error);
        throw error;
    }
};

const createOrder = async (OrderData) => {
    try {
        const {
            usuarioId,
            nombreCliente,
            emailCliente,
            telefonoCliente,
            modeloPc,
            numeroSeriePc,
            estadoInicial,
            accesoriosEntregados,
            estado
        } = OrderData;

        const contrasenaPredeterminada = "123456";
        const contrasenaHash = await bcrypt.hash(contrasenaPredeterminada, 10);

        const nuevoCliente = await Usuario.create({
            nombre: nombreCliente,
            email: emailCliente,
            accesoTotal: false,
            contrasena: contrasenaHash,
            estado: true
        });

        const nuevaOrden = await Order.create({
            usuarioId: usuarioId,
            nombreCliente,
            telefonoCliente,
            emailCliente,
            modeloPc,
            numeroSeriePc,
            estadoInicial,
            accesoriosEntregados,
            estado,
            clienteId: nuevoCliente.id 
        });

        await enviarCredencialesCliente(emailCliente, nombreCliente, contrasenaHash, nuevaOrden.id);

        return nuevaOrden;
    } catch (error) {
        console.error('Error creating Order:', error);
        throw error;
    }
};

const updateOrder = async (id, OrderData) => {
    try {
        const existingOrder = await Order.findByPk(id);
        if (!existingOrder) {
            throw new Error('Order not found');
        }
        await existingOrder.update(OrderData);
        return existingOrder;
    } catch (error) {
        console.error('Error updating Order:', error);
        throw error;
    }
};

const deleteOrder = async (id) => {
    try {
        const order = await Order.findByPk(id);
        if (!order) {
            throw new Error('Order not found');
        }
        await order.destroy();
        return Order;
    } catch (error) {
        console.error('Error deleting Order:', error);
        throw error;
    }
};

const cambiarEstado = async (id, estado) => {
    try {
        const order = await Order.findByPk(id);
        if (!order) {
            throw new Error('Orden no encontrada');
        }
        order.estado = estado;
        await order.save();
        return order;
    } catch (error) {
        console.error('Error al cambiar estado de la orden:', error);
        throw error;
    }
};

module.exports = {
    getAllOrders,
    getOrderById,
    createOrder,
    updateOrder,
    deleteOrder,
    cambiarEstado
};
