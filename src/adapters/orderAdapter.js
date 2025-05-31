const  orderRepository = require('../repositories/OrderRepository');

const getAllOrders = async () => {
    try {
        const Orders = await orderRepository.getAllOrders();
        return (Orders)? Orders : [];
    } catch (error) {
        console.error('Error fetching Orders:', error);
        throw error;
    }
}

const getOrderById = async (id) => {
    try {
        const Order = await orderRepository.getOrderById(id);
        return (Order)? Order : [];;
    } catch (error) {
        console.error('Error fetching Order:', error);
        throw error;
    }
}

const createOrder = async (OrderData) => {
    try {
        const newOrder = await orderRepository.createOrder(OrderData);
        return (newOrder)? newOrder : [];;
    } catch (error) {
        console.error('Error creating Order:', error);
        throw error;
    }
}

const updateOrder = async (id, OrderData) => {
    try {
        const Order = await orderRepository.updateOrder(id, OrderData);
        return (Order)? Order : [];;
    } catch (error) {
        console.error('Error updating Order:', error);
        throw error;
    }
}

const deleteOrder = async (id) => {
    try {
        const Order = await orderRepository.deleteOrder(id);
        return (Order)? Order : [];;
    } catch (error) {
        console.error('Error deleting Order:', error);
        throw error;
    }
}

const cambiarEstado = async (id, estado) => {
    try {
        const updatedOrder = await orderRepository.cambiarEstado(id, estado);
        return updatedOrder;
    } catch (error) {
        console.error('Error en service al cambiar estado:', error);
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