const express =require('express');
const morgan=require('morgan');
const bodyParser=require('body-parser')

const app=express();

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