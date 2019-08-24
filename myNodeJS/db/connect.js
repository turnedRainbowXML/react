const mongoose = require('mongoose')
<<<<<<< HEAD
// 连接数据库
mongoose.connect('mongodb://localhost/item3',{ useNewUrlParser: true })//缺失了{ useNewUrlParser: true }的话就复制到这里
=======

// 1.连接数据库
mongoose.connect('mongodb://localhost/xiaobu',{ useNewUrlParser: true })
>>>>>>> 3f0caf0862752a9bcece2df71549c4e088f8b6b5

// 2.获取连接对象
const db = mongoose.connection

// 3.如果连接成功
<<<<<<< HEAD
db.once('open',()=>{
=======
db.once('open',() => {
>>>>>>> 3f0caf0862752a9bcece2df71549c4e088f8b6b5
    console.log('db ok')
})

// 4.如果连接失败
<<<<<<< HEAD
db.on('error',()=>{
    console.log('db error')
})
=======
db.on('error',() => {
    console.log('db error')
})
>>>>>>> 3f0caf0862752a9bcece2df71549c4e088f8b6b5
