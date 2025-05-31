const  itemRepository = require('../repositories/itemRepository');

const getAllItems = async () => {
    try {
        const Items = await itemRepository.getAllItems();
        return (Items)? Items : [];
    } catch (error) {
        console.error('Error fetching Items:', error);
        throw error;
    }
}

const getItemById = async (id) => {
    try {
        const Item = await itemRepository.getItemById(id);
        return (Item)? Item : [];;
    } catch (error) {
        console.error('Error fetching Item:', error);
        throw error;
    }
}

const createItem = async (ItemData) => {
    try {
        const newItem = await itemRepository.createItem(ItemData);
        return (newItem)? newItem : [];;
    } catch (error) {
        console.error('Error creating Item:', error);
        throw error;
    }
}

const updateItem = async (id, ItemData) => {
    try {
        const Item = await itemRepository.updateItem(id, ItemData);
        return (Item)? Item : [];;
    } catch (error) {
        console.error('Error updating Item:', error);
        throw error;
    }
}

const deleteItem = async (id) => {
    try {
        const Item = await itemRepository.deleteItem(id);
        return (Item)? Item : [];;
    } catch (error) {
        console.error('Error deleting Item:', error);
        throw error;
    }
}

const cambiarEstado = async (id, estado) => {
    try {
        const updatedItem = await itemRepository.cambiarEstado(id, estado);
        return updatedItem;
    } catch (error) {
        console.error('Error en service al cambiar estado:', error);
        throw error;
    }
};


module.exports = {
    getAllItems,
    getItemById,
    createItem,
    updateItem,
    deleteItem,
    cambiarEstado
};