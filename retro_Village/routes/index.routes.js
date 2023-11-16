const express = require('express');
const router = express.Router();
const controller = require('../controllers/index.controllers');



router.get('/', controller.index);

router.post('/productos', controller.createProduct);

router.put('/productos/:id', controller.updateProduct);

router.get('/productos', controller.getAllProducts);

router.get('/productos/:id', controller.getProductById);


router.use((req, res) => {
    res.status(404).send('No se econtro la pagina solicitada. (ERROR 404)');
});



module.exports = router;
