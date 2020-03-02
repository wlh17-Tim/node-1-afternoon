const express = require('express');
const products = require('../products.json');

const app = express();
const getProducts = require('./getProducts');

const port = 3333;

app.get('/api/products', getProducts);

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});
