const express = require ("express") // for postman
const cors = require ("cors") // for postman
require ('./db/config') // database
const Product = require ('./db/Product') // schema
const User = require("./db/User")
const app = express()

app.use(express.json()) // conver to json // off for multer
app.use(cors()) // conver to json // off for multer


// post
app.post("/create", async (req,resp)=>{
    console.log(req.body) // receive from postman
    let data = new Product(req.body) // save to db
    let result = await data.save() // save to db
    resp.send(result) // msg in postman
})


// get
app.get("/products", async (req,resp)=>{
    let data = await Product.find()
    resp.send(data)
})


// search api
app.get("/products/:key", async (req,resp)=>{
    console.log(req.params.key)
    let data = await Product.find(
        {
            "$or":[
                {"name":{$regex:req.params.key}},
                {"color":{$regex:req.params.key}},
                {"category":{$regex:req.params.key}},
                {"brand":{$regex:req.params.key}}
            ]
        }
    )
    resp.send(data)
})


// signup
app.post("/register", async (req, resp) => {
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password    
    resp.send({result})
    
})


// login
app.post("/login", async (req, resp) => {
    if (req.body.password && req.body.email) {
        let user = await User.findOne(req.body);
        if (user) {
                resp.send({user})
        } else {
            resp.send({ result: "No User found" })
        }
    } else {
        resp.send({ result: "No User found" })
    }
});


app.listen(5000)