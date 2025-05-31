const express = require('express');
const app = express();
require('dotenv').config();


app.use(express.json());

const PORT = process.env.PORT || 3000;

// Ruta principal
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Ruta /about
app.get('/about', (req, res) => {
    res.send('About Page');
});

const db=require('./src/models');
db.sequelize.sync()
    .then(() => {
        console.log('Database synchronized successfully.');
    })
    .catch((error) => {
        console.error('Error synchronizing the database:', error.message);
    });
const indexRoutes=require('./src/routes/index')
app.use(indexRoutes) 

// Escuchando en el puerto definido
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});