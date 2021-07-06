import dotenv from 'dotenv'
import dbConnect from './config/dbConfig.js'
import mongoose from 'mongoose'
import colours from 'colours'
import productList from './data/productList.js'
import userList from './data/userList.js'
import orders from './models/ordersModel.js'
import product from './models/productsModel.js'
import user from './models/userModel.js'

const env = dotenv.config();
dbConnect();

const import_data = async () => {
    try {
        await user.deleteMany();
        await product.deleteMany();
        await orders.deleteMany();

        const userData = await user.insertMany(userList);
        const admin = userData[0]._id
        const pdtData = productList.map(pdt => {
            return { ...pdt, createdBy: admin }
        })
        await product.insertMany(pdtData)
        await orders.insertMany()
        console.log("Data added".green.inverse)
        process.exit()
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

const delete_data = async () => {
    try {
        await user.deleteMany();
        await product.deleteMany();
        await orders.deleteMany();
        console.log("Data deleted".red.inverse)
        process.exit()
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}


if (process.argv[2] === "-d")
    delete_data();
else
    import_data();