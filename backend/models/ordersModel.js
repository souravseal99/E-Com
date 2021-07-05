import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    info: {
        billing_name: {
            type: String,
            require: true
        },
        item: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'products',
            require: true,
        }
    },
    shipping_address: {
        locality: { type: String, require: true },
        zip_code: { type: String, require: true },
        state: { type: String, require: true },
        country: { type: String, require: true },
    },
    price: {
        type: Number,
        require: true,
        default: 0.00
    },
    tax: {
        type: Number,
        require: true,
        default: 0.00
    },
    paid: {
        type: Boolean,
        require: true,
    },
    paidAt: {
        type: Date,
    },
    delivered: {
        type: Boolean,
        require: true,
    },
    deliveredAt: {
        type: Date,
    },
    paymentGateway: {
        type: String,
        require: true
    },
    psymentDetails: {
        id: String,
        status: String,
        update_time: String,
        email_address: String,
    }
}, {
    timestamp: true
})

const order = mongoose.model('order', orderSchema)

export default order