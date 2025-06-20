const authAdapter = require('../adapters/authAdapter');
const bcrypt = require('bcrypt');

const getAllUsers = async (req, res, next) => {
    try{
        const users = await authAdapter.getAllUsers();
        res.status(200).json(users);
    }
    catch (error) {
            console.log('Error fetching users:', error);
            res.status(500).json({ message: 'Error fetching users' });
        }
}

const getUserById = async (req, res, next) => {
    try{
        const id=req.params.id
        const user = await authAdapter.getUserById(id);
        res.status(200).json(user);
    }
    catch (error) {
            console.log('Error fetching user:', error);
            res.status(500).json({ message: 'Error fetching user' });
        }
}

const createUser = async (req, res, next) => {
    try{
        console.log('Creating user with data:', req.body);
        const id=req.params.id
        const userData = req.body;
        const newUser = await authAdapter.createUser(userData);
        res.status(201).json(newUser);
    }
    catch (error) {
            console.log('Error creating user:', error);
            res.status(500).json({ message: 'Error creating user' });
        }
}

const updateUser = async (req, res, next) => {
    try{
        const id=req.params.id
        const userData = req.body;
        const user = await authAdapter.updateUser(id, userData);
        res.status(200).json(user);
    }
    catch (error) {
            console.log('Error updating user:', error);
            res.status(500).json({ message: 'Error updating user' });
        }
}

const deleteUser = async (req, res, next) => {
    try{
        const id=req.params.id
        const user = await authAdapter.deleteUser(id);
        res.status(200).json(user);
    }
    catch (error) {
            console.log('Error deleting user:', error);
            res.status(500).json({ message: 'Error deleting user' });
        }
}

const cambiarclave = async (req, res, next) => {
    try{
        const id=req.params.id
        const userData = req.body;
        //verificar la contraseña actual
        //hacer bcrypt de la nueva contraseña
        const user = await authAdapter.cambiarclave(id, userData);
        res.status(200).json(user);
    }
    catch (error) {
            console.log('Error changing password:', error);
            res.status(500).json({ message: 'Error changing password' });
        }
}

const cambiarFoto = async (req, res, next) => {
    try{
        const id=req.params.id
        const userData = req.body;
        const user = await authAdapter.cambiarFoto(id, userData);
        res.status(200).json(user);
    }
    catch (error) {
            console.log('Error changing photo:', error);
            res.status(500).json({ message: 'Error changing photo' });
        }
}

const login = async (req, res, next) => {
  console.log("Solicitud de login recibida:", req.body);
  try {
    const email = req.body.email;
    console.log('Buscando usuario por email:', email);
    const user = await authAdapter.login(email);
    console.log('Usuario encontrado:', user ? user.email : 'No encontrado');

    if (!user) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    console.log('Comparando contraseñas...');
    const isMatch = await bcrypt.compare(req.body.password, user.contrasena);
    console.log('Resultado comparación:', isMatch);

    if (!isMatch) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET || 'tu_clave_secreta',
      { expiresIn: '1h' }
    );
    console.log('Token generado');

    const { contrasena, ...userWithoutPassword } = user.dataValues;

    res.status(200).json({ user: userWithoutPassword, token });
  } catch (error) {
    console.log('Error logging in:', error);
    res.status(500).json({ message: 'Error al iniciar sesión' });
  }
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    cambiarclave,
    cambiarFoto,
    login
}