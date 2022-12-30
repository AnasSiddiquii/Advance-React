const express = require ("express") // for postman
require ('./config') // database
const Product = require ('./product') // schema

// const multer = require("multer") // last

const app = express()
app.use(express.json()) // conver to json // off for multer


// post
app.post("/create", async (req,resp)=>{
    console.log(req.body) // receive from postman
    let data = new Product(req.body) // save to db
    let result = await data.save() // save to db
    resp.send(result) // msg in postman
})


// get
app.get("/list", async (req,resp)=>{
    let data = await Product.find()
    resp.send(data)
})


// put
app.put("/update/:_id", async (req,resp)=>{
    console.log(req.params)
    let data = await Product.updateOne(
        req.params,
        {
            $set:req.body
        }
    )
    resp.send(data)
})


// delete
app.delete("/delete/:_id", async (req,resp)=>{
    console.log(req.params)
    let data = await Product.deleteOne(req.params)
    resp.send(data)
})


// search api
app.get("/search/:key", async (req,resp)=>{
    console.log(req.params.key)
    let data = await Product.find(
        {
            "$or":[
                {"name":{$regex:req.params.key}},
                {"brand":{$regex:req.params.key}},
                {"category":{$regex:req.params.key}}
            ]
        }
    )
    resp.send(data)
})


// // upload file
// const upload = multer({
//     Storage:multer.diskStorage({
//         destination:function(req,file,cb)
//         {
//             cb(null,"uploads")
//         },
//         filename:function(req,file,cb)
//         {
//             cb(null,file.fieldname + "-" + Date.now() + ".jpg")
//         }
//     })
// }).single("user_file")

// app.post("/upload", upload, (req,resp)=>{
//     resp.send("file uploaded")
// })

    
app.listen(5000)