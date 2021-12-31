const MongoClient = require("mongodb").MongoClient
const mongoose = require("mongoose")

const DBurl = 'mongodb://127.0.0.1:27017'

MongoClient.connect(DBurl,{ useNewUrlParser:true },function(error,db){
    if(error){
        console.log(error)
    }else{
        let userdemo = db.db('demo1').collection('user')
        console.log(userdemo.find().toArray(function(error,result){
            if(error){
                console.log(error)
            }else{
                console.log(result)
            }
        }))
    }
})
