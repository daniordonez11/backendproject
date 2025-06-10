require('dotenv').config();
console.log('Usuario:', process.env.DB_USERNAME);
console.log('Contraseña:', process.env.DB_PASSWORD);
console.log('Base de datos:', process.env.DB_NAME);
console.log('Dialect:', process.env.DB_DIALECT);