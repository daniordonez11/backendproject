const db=require('../models');
const User = db.Usuarios;

const getAllUsers = async () => {
    try {
        const users = await User.findAll({attributes: ['id', 'nombre', 'apellido', 'email', 'contrasena', 'estado', 'nacimiento', 'accesoTotal']});
        return users;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}

const getUserById = async (id) => {
    try {
        const user = await User.findByPk({where: {id}, attributes: ['id', 'nombre', 'apellido', 'email', 'contrasena', 'estado', 'nacimiento', 'accesoTotal']});
        return user;
    } catch (error) {
        console.error('Error fetching user:', error);
        throw error;
    }
}

const createUser = async (userData) => {
    try {
        const newUser = await User.create(userData);
        return newUser;
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
}

const updateUser = async (id, userData) => {
    try {
        const user = await User.findByPk(id);
        if (!user) {
            throw new Error('User not found');
        }
        await user.update(userData);
        return user;
    } catch (error) {
        console.error('Error updating user:', error);
        throw error;
    }
}

const deleteUser = async (id) => {
    try {
        const user = await User.findByPk(id);
        if (!user) {
            throw new Error('User not found');
        }
        await user.destroy();
        return user;
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
}

const login=async (email) => {
    try {
        const user = await User.findOne({where: {email}});
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
}


const cambiarclave=async (data,id) => {
    try {
        const user = await User.update(data, {where: {id}});
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    } catch (error) {
        console.error('Error updating password:', error);
        throw error;
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    login,
}