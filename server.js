const express = require('express');
const app = express();
require('dotenv').config();


app.use(express.json());

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

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
app.listen(PORT, '0.0.0.0', () => {
    // para pruebas: ${PORT}
    // para probar con movil: 
    console.log(`Server is running on port: ${PORT}`);
});