const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    username: {type: String,required: true},

    goodsId: {type: String,required: true},
    goodsName: {type: String,required: true},
    goodsImg: {type: String,required: true},
    goodsPrice: {type: Number,required: true},
<<<<<<< HEAD
    goodsSkus:{type:Array,required:true},
    goodsNum: {type: Number,default: 10}, // 不要尝试去把它理解成库存
    goodsTitle: String,
    goodsDesc: String,
    
    buySku:{type:String,default:''},
=======
    goodsSkus: {type: Array,required: true},
    goodsNum: {type: Number,default: 10}, // 不要尝试去把它理解成库存
    goodsTitle: String,
    goodsDesc: String,

    buySku: {type: String,default: ''},
>>>>>>> 3f0caf0862752a9bcece2df71549c4e088f8b6b5
    buyNum: {type: Number,default: 0},
})

const Cart = mongoose.model('cart',cartSchema)

module.exports = Cart