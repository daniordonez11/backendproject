const db=require('../models');
const Item = db.Inventario;
console.log('MODELO', Item);

const getAllItems = async () => {
    try {
        const Items = await Item.findAll({attributes: [
        'id',
        'descripcion',
        'cantidad',
        'observacion',
        'createdAt',
        'updatedAt']});
        return Items;
    } catch (error) {
        console.error('Error fetching Items:', error);
        throw error;
    }
}

const getItemById = async (id) => {
    try {
        const Item = await Item.findByPk({where: {id}, attributes: [
        'id',
        'descripcion',
        'cantidad',
        'observacion',
        'createdAt',
        'updatedAt']});
        return Item;
    } catch (error) {
        console.error('Error fetching Item:', error);
        throw error;
    }
}

const createItem = async (ItemData) => {
    try {
        const newItem = await Item.create(ItemData);
        return newItem;
    } catch (error) {
        console.error('Error creating Item:', error);
        throw error;
    }
}

const updateItem = async (id, ItemData) => {
    try {
        const Item = await Item.findByPk(id);
        if (!Item) {
            throw new Error('Item not found');
        }
        await Item.update(ItemData);
        return Item;
    } catch (error) {
        console.error('Error updating Item:', error);
        throw error;
    }
}

const deleteItem = async (id) => {
    try {
        const Item = await Item.findByPk(id);
        if (!Item) {
            throw new Error('Item not found');
        }
        await Item.destroy();
        return Item;
    } catch (error) {
        console.error('Error deleting Item:', error);
        throw error;
    }
}

const cambiarEstado = async (id, estado) => {
    try {
    const Item = await Item.findByPk(id);
    if (!Item) {
    throw new Error('Orden no encontrada');
    }

    Item.estado = estado;
    await Item.save();

    return Item;
    } catch (error) {
    console.error('Error al cambiar estado de la orden:', error);
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
}