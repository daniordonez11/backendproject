const db=require('../models');
const Item = db.Inventario;
console.log('MODELO', Item);

const getAllItems = async () => {
    try {
        const item  = await Item.findAll({attributes: [
        'id',
        'descripcion',
        'cantidad',
        'observacion',
        'createdAt',
        'updatedAt']});
        return item;
    } catch (error) {
        console.error('Error fetching Items:', error);
        throw error;
    }
}

const getItemById = async (id) => {
    try {
        const item = await Item.findByPk(id, {
            attributes: [
                'id',
                'descripcion',
                'cantidad',
                'observacion',
                'createdAt',
                'updatedAt'
            ]
        });
        return item;
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
        const item = await Item.findByPk(id);
        if (!item) {
            throw new Error('Item not found');
        }
        await item.update(ItemData);
        return item;
    } catch (error) {
        console.error('Error updating Item:', error);
        throw error;
    }
}

const deleteItem = async (id) => {
    try {
        const item = await Item.findByPk(id);
        if (!item) {
            throw new Error('Item not found');
        }
        await item.destroy();
        return item;
    } catch (error) {
        console.error('Error deleting Item:', error);
        throw error;
    }
}

const cambiarEstado = async (id, estado) => {
    try {
    const item = await Item.findByPk(id);
    if (!item) {
    throw new Error('Orden no encontrada');
    }

    item.estado = estado;
    await item.save();

    return item;
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