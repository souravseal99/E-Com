import dotenv from 'dotenv'
import dbConnect from './config/dbConfig.js'
import mongoose from 'mongoose'
import colours from 'colours'
import productList from './data/productList'
import userData from './data/userData'
import orders from './models/ordersModel'
import product from './models/productsModel'
import user from './models/userModel'

const env = dotenv.config();
dbConnect();

const import_data = () => {
    // user.deleteMany();
    // product.deleteMany();
    // orders.deleteMany();

    // user.insertMany();
    const admin = userData[0]
    console.log(admin);
}

import_data();