const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const orderSchema=new Schema({
order_no:Number,
order_date:String,
order_amount:String

})

module.exports=mongoose.model('Order',orderSchema);