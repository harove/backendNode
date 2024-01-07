import mongoose from 'mongoose'
import { randomUUID } from 'crypto'
import util from 'node:util'

await mongoose.connect('mongodb://localhost/coderhouse').then(()=>{
    console.log('connected to mongodb local')
})

const productSchema = new mongoose.Schema({
    _id: { type: String, default: randomUUID },
    name: String,
}, {
    strict: 'throw',
    versionKey: false
})

export const Product = mongoose.model('products', productSchema)


const cartSchema = new mongoose.Schema({
    _id: { type: String, default: randomUUID },
    products: {type: [{_id: String, quantity: {type:Number, min:1}}], default:[]},
}, {
    strict: 'throw',
    versionKey: false
})

export const Cart = mongoose.model('carts', cartSchema)

await Product.deleteMany({})
await Cart.deleteMany({})


const p1 = await Product.create({name: 'mesa'})

const c1 = await Cart.create({})

c1.products.push({_id: p1._id, quantity:2 })
await c1.save()

console.log(util.inspect(await Cart.find().lean(), false, 3))


const result = await Cart.aggregate([
    {
        $unwind: '$products'
    },
    {
        $lookup : {
        from: 'products',
        localField: 'products._id',
        foreignField: '_id',
        as: 'products.product'}
    },
    {
        $unwind: '$products.product'
    },
    {
        $project: {
            _id: 1,
            products: {
                name: '$products.product.name',
                quantity: '$products.quantity'
            }
        }
    },
    {
        $group: {
            _id: '$_id',
            products: { $push: '$products' }
        }
    }
])


console.log(util.inspect(result, false, 4))

mongoose.connection.close()