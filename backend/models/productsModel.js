import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        review: {
            type: String,
            required: true
        },
        rating: {
            type: Number,
            required: true,
            default: 0
        }
    }, {
    timestamp: true
}
)

const productSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Type.ObjectID,
        ref: 'user',
        require: true
    },
    name: {
        type: String,
        require: true,
    },
    details: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        require: true,
    },
    brand: {
        type: String,
        require: true,
    },
    category: {
        type: String,
        require: true,
    },
    reviews: [reviewSchema],
    avgReview: {
        type: Number,
        require: true,
        default: 0
    },
    numReviews: {
        type: Number,
        require: true,
        default: 0
    },
    price: {
        type: Number,
        require: true,
        default: 0
    },
    count: {
        type: Number,
        require: true,
        default: 0
    },
}, {
    timestamp: true
})

const products = mongoose.model('products', productSchema)

export default products