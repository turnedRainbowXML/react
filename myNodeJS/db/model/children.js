const mongoose = require('mongoose')

// 1.定义一个集合的结构，这个集合中的每个数据有哪些字段
const childSchema = new mongoose.Schema({
    username: {type: String,required: true},
    sex: {type: Number,default: 0},
    age: Number
})

// 2.实例化一个操作用户集合的model，相当于一个集合
const Child = mongoose.model('child',childSchema)

// 3.导出这个model
module.exports = Child