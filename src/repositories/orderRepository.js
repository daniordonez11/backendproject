const db=require('../models');
const Order = db.Ordenes;
const Usuario = db.Usuario;
console.log('MODELO', Order);

const getAllOrders = async () => {
    try {
        const Orders = await Order.findAll({attributes: [
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
        'updatedAt']});
        return Orders;
    } catch (error) {
        console.error('Error fetching Orders:', error);
        throw error;
    }
}

const getOrderById = async (id) => {
    try {
        const Order = await Order.findByPk({where: {id}, attributes: [
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
        'updatedAt']});
        return Order;
    } catch (error) {
        console.error('Error fetching Order:', error);
        throw error;
    }
}

const createOrder = async (OrderData) => {
    try {
        const newOrder = await Order.create(OrderData);
        return newOrder;
    } catch (error) {
        console.error('Error creating Order:', error);
        throw error;
    }
}

const updateOrder = async (id, OrderData) => {
    try {
        const Order = await Order.findByPk(id);
        if (!Order) {
            throw new Error('Order not found');
        }
        await Order.update(OrderData);
        return Order;
    } catch (error) {
        console.error('Error updating Order:', error);
        throw error;
    }
}

const deleteOrder = async (id) => {
    try {
        const Order = await Order.findByPk(id);
        if (!Order) {
            throw new Error('Order not found');
        }
        await Order.destroy();
        return Order;
    } catch (error) {
        console.error('Error deleting Order:', error);
        throw error;
    }
}

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
}