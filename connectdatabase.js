const mongoose = require('mongoose');
require('dotenv').config()
const uri = process.env.MONGO_URI
//mongodb+srv://siezaza00:<password>@cluster0.o7nuvvb.mongodb.net/
//shop_infor
const creatconnect = async () => {
   try {
    await mongoose.connect(uri)
    console.log('mongoose connect')
   } catch (error) {
    console.log(error)
   }
    
}

module.exports = creatconnect