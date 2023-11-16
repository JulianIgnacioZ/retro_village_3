// app.js
const express = require('express');
const { body } = require('express-validator');
const app = express();
const PORT = process.env.PORT || 3000;
const db = require('../retro_Village/models/index.models')

/* db.sync()
    .then(() => {
        console.log('Modelos sincronizados con la base de datos');
    })
    .catch(error => {
        console.error('Error al sincronizar modelos:', error);
    });
*/

//rutas
app.use(express.json());
const router = require('./routes/index.routes');
app.use(router)

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo salió mal!');
});


app.listen(PORT, () => {
    console.log(`Servidor Express en ejecucion en el puerto ${PORT}`)
});


