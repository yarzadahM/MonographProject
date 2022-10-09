const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const CategorySchema=new Schema({
tracking_no:Number,
courior_name:String

})

module.exports=mongoose.model('Category',CategorySchema);