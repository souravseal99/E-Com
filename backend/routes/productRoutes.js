import express from 'express'
import asyncHandler from 'express-async-handler'
import productModel from '../models/productsModel.js'
const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const productList = await productModel.find({})
    res.json(productList);
}))

router.get('/:id', asyncHandler(async (req, res) => {
    const product = await productModel.findById(req.params.id);
    if (product) {
        res.json(product)
    } else {
        res.send(404).json({ Error: "Item not found" })
    }
    res.send(product)
}))

export default router