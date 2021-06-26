import mongoose from "mongoose";

const dbConnect = async () => {
    try {
        const conn = await mongoose.connect(`${process.env.MONGO_URI}`, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        })
        console.log(`MongoDB connected: ${conn.connection.host}`.cyan.bold)
    } catch (error) {
        console.log(error.message.red.underline.bold)
        process.exit(1)
    }
}

export default dbConnect