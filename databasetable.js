const mongoose = require('mongoose')

const table = mongoose.Schema({
    shopname:{
        type:String
        
    },
    local_at:{
        type:String
    },
    file:{
        type:String
    },
    connect:{
        type:String
    }
},{timestamps: true })

module.exports = mongoose.model('table',table)