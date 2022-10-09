const express =require('express');
const morgan=require('morgan');
const bodyParser=require('body-parser')
const Mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config()

const app=express();

Mongoose.connect(process.env.DATABASE,err=>{
    if(err){
        console.log(err)
    }else{
        console.log('connect to DB')
    }
})


//middleware

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))


app.get('/', (req,res)=>{
    res.json('helllo')
})

app.listen(3000,err=>{
    console.log('listening on port',3000)
})