const mongoose = require('mongoose')

// 1.定义一个集合的结构，这个集合中的每个数据有哪些字段
const goodsSchema = new mongoose.Schema({
    goodsName: {type: String,required: true},
    goodsImg: {type: String,required: true},
    goodsPrice: {type: Number,required: true},
    goodsSkus: {type: Array,required: true},
    goodsNum: {type: Number,default: 0},
    goodsTitle: String,
    goodsDesc: String,
    goodsType: {type: Number}
})

// 2.实例化一个操作用户集合的model，相当于一个集合
const Goods = mongoose.model('goods',goodsSchema)

// 3.导出这个model
module.exports = Goods