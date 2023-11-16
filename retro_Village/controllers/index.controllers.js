const Product = require('../models/index.models')
const controller = {};


controller.index = (req, res) => {
    res.send('Retro Village')
};

controller.createProduct = (req, res) => {
    Product.create(req.body)
        .then(newProduct => {
            res.status(201).json({ message: 'Producto creado exitosamente', product: newProduct });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: 'Error al crear el producto' });
        });
};

controller.updateProduct = (req, res) => {
    Product.update(req.body, {
        where: { id: req.params.id },
        returning: true,
    })
        .then(([updatedRowCount, [updatedProduct]]) => {
            if (updatedRowCount === 0) {
                return res.status(404).json({ error: 'Producto no encontrado' });
            }
            res.json({ message: 'Producto actualizado exitosamente', product: updatedProduct });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: 'Error al actualizar el producto' });
        });
};

controller.getAllProducts = (req, res) => {
    Product.findAll({
        attributes: ['idProducto', 'nombre', 'cantidad', 'precio', 'descripcion'],
    })
        .then(products => {
            res.json(products);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: 'Error al obtener los productos' });
        });
};


controller.getProductById = (req, res) => {
    Product.findByPk(req.params.id)
        .then(product => {
            if (!product) {
                return res.status(404).json({ error: 'Producto no encontrado' });
            }
            res.json(product);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: 'Error al obtener el producto' });
        });
};

module.exports = controller;
