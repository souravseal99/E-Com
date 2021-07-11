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
        res.status(404)
        throw Error("Item not found")
    }
}))

export default router