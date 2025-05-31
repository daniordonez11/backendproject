const itemAdapter = require('../adapters/itemAdapter');
const bcrypt = require('bcrypt');
const {Inventario} = require('../models');

const getAllItems = async (req, res, next) => {
    try{
        const Items = await itemAdapter.getAllItems();
        res.status(200).json(Items);
    }
    catch (error) {
            console.log('Error fetching Items:', error);
            res.status(500).json({ message: 'Error fetching Items', error: error.message });
        }
}

const getItemById = async (req, res, next) => {
    try{
        const id=req.params.id
        const Item = await itemAdapter.getItemById(id);
        res.status(200).json(Item);
    }
    catch (error) {
            console.log('Error fetching Item:', error);
            res.status(500).json({ message: 'Error fetching Item' });
        }
}

const createItem = async (req, res) => {
    try {
    const ItemData = req.body;
    const newItem = await Inventario.create(ItemData);
    res.status(201).json(newItem);
    } catch (error) {
    console.error('Error creating Item:', error);
    res.status(500).json({ message: 'Error creating Item' });
    }
}

const updateItem = async (req, res, next) => {
    try{
        const id=req.params.id
        const ItemData = req.body;
        const Item = await itemAdapter.updateItem(id, ItemData);
        res.status(200).json(Item);
    }
    catch (error) {
            console.log('Error updating Item:', error);
            res.status(500).json({ message: 'Error updating Item' });
        }
}

const deleteItem = async (req, res, next) => {
    try{
        const id=req.params.id
        const Item = await itemAdapter.deleteItem(id);
        res.status(200).json(Item);
    }
    catch (error) {
            console.log('Error deleting Item:', error);
            res.status(500).json({ message: 'Error deleting Item' });
        }
}

const cambiarEstado = async (req, res, next) => {
    try {
        const id = req.params.id;
        const { estado } = req.body;

        if (!estado) {
            return res.status(400).json({ message: 'El campo estado es obligatorio' });
        }

        const updatedItem = await itemAdapter.cambiarEstado(id, estado);

        res.status(200).json(updatedItem);
    } catch (error) {
        console.error('Error changing Item status:', error);
        res.status(500).json({ message: 'Error updating Item status' });
    }
};

module.exports = {
    getAllItems,
    getItemById,
    createItem,
    updateItem,
    deleteItem,
    cambiarEstado,
}