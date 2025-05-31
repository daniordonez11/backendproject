const  authRepository = require('../repositories/authRepository');

const getAllUsers = async () => {
    try {
        const users = await authRepository.getAllUsers();
        return (users)? users : [];
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}

const getUserById = async (id) => {
    try {
        const user = await authRepository.getUserById(id);
        return (user)? user : [];;
    } catch (error) {
        console.error('Error fetching user:', error);
        throw error;
    }
}

const createUser = async (userData) => {
    try {
        const newUser = await authRepository.createUser(userData);
        return (newUser)? newUser : [];;
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
}

const updateUser = async (id, userData) => {
    try {
        const user = await authRepository.updateUser(id, userData);
        return (user)? user : [];;
    } catch (error) {
        console.error('Error updating user:', error);
        throw error;
    }
}

const deleteUser = async (id) => {
    try {
        const user = await authRepository.deleteUser(id);
        return (user)? user : [];;
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
}

const cambiarclave = async (id, userData) => {
    try {
        //verificar la contraseña actual
        //hacer bcrypt de la nueva contraseña
        const user = await authRepository.cambiarclave(id, userData);
        return (user)? user : [];;
    } catch (error) {
        console.error('Error changing password:', error);
        throw error;
    }
}


const login = async (email) => {
    try {
        const user = await authRepository.login(email);
        // aca voy a verificar la contraseña
        // generar token
        // crear cookie
        return (user)? user : [];;
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    cambiarclave,
    login
}