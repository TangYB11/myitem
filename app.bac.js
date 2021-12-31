const express = require("express")
const ejs = require("ejs")
const fs = require("fs")
const md5 = require("md5-node")
// 图片
const multiparty = require("multiparty")

//session来保存用户信息
const session = require("express-session")

const DB = require("./mongodb.js")
const bodyParser = require("body-parser")

// //网页地址
// const port=50523
// const hostname='127.0.0.1'

const app = new express()

// 配置 session
app.use(session({
    secret:'keyboard cat',
    resave:false,
    saveUninitialized:true,
    cookie:{
        maxAge:60*1000*60
    }
}))



app.use(bodyParser.urlencoded({
    extended:false
}))
app.use(bodyParser.json())

app.use(express.static(__dirname+"/public"))

app.use('/product/upload',express.static("upload"))

app.use('/upload',express.static("upload"))



app.set("views",__dirname+"/views")

app.set("view engine","ejs")

app.engine("html",ejs.__express)

const login = require("./router/admin/login.js")
const product = require("./router/admin/product.js")


app.get('/',function(request,response){
    request.session.pageIndex = 2;
    response.render('main.html')
})

app.use('/login',login)

app.use('/product',product)


// app.listen(port,hostname,function(){
//     console.log(`app is running at http://${hostname}:${port}`)
// })
app.listen(50523);