const express = require('express')
const jwt = require('../utils/jwt')
const User = require('../db/model/users')

const router = express.Router()

// 注册
router.post('/register',(req,res) => {
    const {username,password} = req.body

    // 先从数据库的用户集合中查找这个用户名
    User.find({
        username
    })
    .then((data) => {
        if(data.length){ // 当找到了，直接返回错误信息
            res.send({
                code: -1,
                msg: '该用户名已存在'
            })
        }else{ // 当没找到，就往这个集合中添加这条数据
            return User.insertMany({
                username,
                password
            })
        }
    })
    .then((data) => {
        if(data){ // 针对上一个then，如果没有返回值就不执行，有的话就执行
            res.send({
                code: 1,
                msg: '注册成功'
            })  
        }
    })
    .catch((err) => {
        console.log(err)
        res.send({
            code: -1,
            msg: '注册失败'
        })                 
    })     
})

// 登录
router.post('/login',(req,res) => {
    const {username,password} = req.body

    // 先从数据库的用户集合中查找这个用户名和密码
    User.find({
        username,
        password
    })
    .then((data) => {
        if(data.length){ // 当找到了，直接返回正确信息
            // 生成一个token
            const token = jwt.createToken({
                username,
                // password
            })

            // 把token当成一个普通的参数返回给前端
            res.send({
                code: 1,
                msg: '登录成功',
                token
            })
        }else{ // 当没找到，直接返回错误信息
            res.send({
                code: -1,
                msg: '登录失败'
            })
        }
    })
    .catch(() => {
        res.send({
            code: -1,
            msg: '内部错误'
        })                 
    })     
})

// 用户信息
router.post('/info',(req,res) => {
    const {token} = req.body

    // 1.检验token
    jwt.checkToken(token)
<<<<<<< HEAD
=======
    .catch((err) => {
        console.log(err)
        res.send({
            code: -2,
            msg: '用户未登录'
        })
    })
>>>>>>> 3f0caf0862752a9bcece2df71549c4e088f8b6b5
    .then((data) => {
        // 2.获取用户名
        const {username} = data

        // 3.在用户集合中查询这个用户名对应的用户信息
        return User.find({
            username
        })
<<<<<<< HEAD
    }).then((data) => {
=======
    })
    .then((data) => {
>>>>>>> 3f0caf0862752a9bcece2df71549c4e088f8b6b5
        const info = data[0]

        // 4.返回用户信息
        res.send({
            code: 1,
            msg: '获取用户信息成功',
            info
        })
    })    
    .catch((err) => {
        console.log(err)
        res.send({
            code: -1,
            msg: '获取用户信息失败'
        })
    })
})

module.exports = router