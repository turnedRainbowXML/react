const mongoose = require('mongoose')

// 1.定义一个集合的结构，这个集合中的每个数据有哪些字段
<<<<<<< HEAD
// const userSchema = new mongoose.Schema({
//     username:{type:String,required:true},
//     sex:{type:Number,default:0},
//     age:Number
// })

const userSchema = new mongoose.Schema({
    username:{type:String,required:true},
    password:{type:Number,required:true},
})

// 2.实例化一个操作用户集合的model
=======
const userSchema = new mongoose.Schema({
    username: {type: String,required: true},
    password: {type: String,required: true},
    sex: {type: Number,default: 0},
    age: Number
})

// 2.实例化一个操作用户集合的model，相当于一个集合
>>>>>>> 3f0caf0862752a9bcece2df71549c4e088f8b6b5
const User = mongoose.model('user',userSchema)

// 3.导出这个model
module.exports = User