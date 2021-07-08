import express from 'express'
import dotenv from 'dotenv'
import dbConnect from './config/dbConfig.js'
import productRoutes from './routes/productRoutes.js'
import colours from 'colours'

const app = express();
const env = dotenv.config();
dbConnect();

app.get('/', (req, res) => {
    res.send(`Welcome to InTech on localhost ${PORT}`);
})

app.use('/api/products', productRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));
