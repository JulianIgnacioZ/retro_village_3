const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Bhubhubhuhuhu12',
    database: 'retro_village',
});

connection.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        return;
    }
    console.log('Conectado a la base de datos');

    const createTableQuery = `
    CREATE TABLE IF NOT EXISTS products (
      idProducto INT AUTO_INCREMENT PRIMARY KEY,
      nombre VARCHAR(45) NOT NULL,
      cantidad INT NOT NULL,
      precio DECIMAL(10, 6) NOT NULL,
      descripcion TEXT
    );
  `;

    connection.query(createTableQuery, (err, results) => {
        if (err) {
            console.error('Error al crear la tabla:', err);
        } else {
            console.log('Tabla creada exitosamente');
            insertSampleData();
        }
        connection.end();
    });
});

function insertSampleData() {
    const insertDataQuery = `
    INSERT INTO products (nombre, cantidad, precio, descripcion)
    VALUES
      ('Gameboy Advance', 1, 120, 'Consola portatil retro del 2004.'),
      ('Nintendo DS Lite', 4, 95.50, 'Consola portatil moderna de dos pantallas.'),
      ('Pokemon Verde Hoja', 2, 75.99, 'Clasico juego para revivir toda tu infancia.');
  `;

    connection.query(insertDataQuery, (err, results) => {
        if (err) {
            console.error('Error al insertar datos:', err);
        } else {
            console.log('Datos insertados exitosamente');
        }
    });
}

/*  OBJETO JSON PARA ENVIAR EN SOLICITUD POST DESDE POSTMAN:
{
    "nombre": "Lote de videojuegos Game Boy Advance",
    "cantidad": 1,
    "precio": 99.99,
    "descripcion": "Lote de 7 videojuegos de Game Boy Advance, 3 Pokemon, 2 Mario y 2 Sonic"
}
*/

