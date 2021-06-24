const productList = require('./data/productList')
const dotenv = require('dotenv')
const express = require('express');
const app = express();
const env = dotenv.config();
app.get('/', (req, res) => {
    res.send(`Welcome to InTech on localhost ${PORT}`);
})

app.get('/api/products', (req, res) => {
    res.json(productList);
})

app.get('/api/products/:id', (req, res) => {
    const product = productList.find(pdt => parseInt(pdt._id) === parseInt(req.params.id))
    res.send(product)
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
