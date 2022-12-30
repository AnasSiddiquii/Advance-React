const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/e-comm"); // db connection


const ProductSchema = new mongoose.Schema({ //schema
    name:String,
    price:Number,
    brand:String,
    category:String,
})


// create
const create = async () => {
    const Product = mongoose.model('products',ProductSchema); // schema n model connection
    let data = new Product({ // model
        name:'m8',
        price:1000,
        brand:'samsung',
        category:'mobile'
    });
    let result=await data.save()
    console.log(result)
}
// create() 


// read
const Read = async () => {
    const Product = mongoose.model('products',ProductSchema); // schema n model connection
    let data = await Product.find()
    // let data = await Product.find({name:"max 8"})
    console.log(data)
}
// Read()


// update
const Update = async () => {
    const Product = mongoose.model('products',ProductSchema); // schema n model connection
    let data = await Product.updateOne(
    // let data = await Product.updateMany( // or
        {name:"note 9"},
        {
            $set:{price: 700, name:"max 8"}
        }
    )
    console.log(data)
}
// Update()


// delete
const Delete = async () => {
    const Product = mongoose.model('products',ProductSchema); // schema n model connection
    let data = await Product.deleteOne({name:"max 8"})
    // let data = await Product.updateMany({name:"note 9"})
    console.log(data)
}
// Delete()