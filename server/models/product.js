const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const productSchema=new Schema({
title:String,
status:Boolean,
price:Number,
stockQuantity:Number,
photo:String,
description:String,
rating:[Number],
category:{type:Schema.Types.ObjectId, ref:"Category"},
owner:{type:Schema.Types.ObjectId, ref:"Owner"},

})

module.exports=mongoose.model('Product',productSchema);